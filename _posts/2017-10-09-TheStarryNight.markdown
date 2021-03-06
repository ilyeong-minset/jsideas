---
layout:     post
title:      "The Starry Night in the Distance"
date:       2017-10-09 00:00:00
author:     "Jun"
img: 20171009.png
tags: [python, deep learning, image]
---

2015년에 발표된 논문인 'A Neural Algorithm of Artistic Style'는 아주 재미있는 시도를 했다. 사물 인식에 사용되던 Convolutional Neural Network를 거의 그대로 활용해서 이미지의 컨텐츠로부터 스타일을 분리해낸 것이다. 거기에 한발자국 더 나가서 서로 다른 이미지의 스타일과 컨텐츠를 섞어 명화 느낌이 나는 사진을 만들어냈다. 그 결과물이 사람이 보기에도 그럴듯 해보여서 후속 연구도 많이 나왔고, 또 당시의 결과물이 최근까지도 딥러닝의 멋진 응용사례로 소개되고 있다.

!['A Neural Algorithm of Artistic Style'에 소개된 샘플 이미지들](/assets/materials/20171009/neuralStyleTransfer.png)


논문에 보면, 명화를 시대별로 분류하는 문제에서 저자들이 제안한 스타일을 활용하면 더 좋은 결과가 나오지 않을까 추측하는 부분이 있었다. 그래서 관련 논문을 좀 찾아보니, 'Neural Style Representations and the Large-Scale Classification of Artistic Style'라는 연구를 발견했다. 이 논문에서는 Gram Matrix를 통해 명화들의 스타일을 정량화한 다음, 랜덤포레스트 분류기에 집어넣었는데, 어느정도 괜찮은(competitive) 분류 성능을 내기는 했으나 결과적으로 벤치마크에 사용한 ResNet을 넘어설 수는 없었다.

!['Neural Style Representations and the Large-Scale Classification of Artistic Style'의 분류 성능 비교](/assets/materials/20171009/style_classification_res.png)

그림에서 뽑아낸 스타일로 명화의 시대를 분류할 수 있다면, 범위를 좁혀서 반 고흐의 'The Starry Night' 스타일이 언제 시작되었는지도 알 수 있지 않을까 하는 생각이 들었다. 거기다 반 고흐의 그림에만 연산을 돌려도 되니 돈들여서 EC2 띄울 필요도 없을 것 같고..(그럴 것 같았으나 결국 추석 내내 컴퓨터를 돌렸다 ㅠㅠ)

결과를 보기 전에 스타일을 뽑는데 쓰는 `Gram Matrix`라는 방법을 짚고 넘어가자.

<br>

## Gram Matrix

추상적인 '스타일'을 어떻게 정량화할 수 있을까? 원 논문의 저자들은 그 방법으로 Gram Matrix를 제안한다. Gram Matrix \\(G^l \in R^{N_l \times N_l} \\) 는 각 컨볼루션 레이어의 피쳐맵을 벡터라이즈한 다음, 그 벡터들간에 상관관계로 구성된 매트릭스다. 

그 개념과 추출방식을 아래와 같이 정리해보았다.

![Gram Matrix에 대한 개인적 이해](/assets/materials/20171009/gram_matrix.png)

Gram Matrix에 들어가는 값은 아래와 같이 피쳐맵간의 matrix multiplication과 같다.
\\[
  G^l_{ij} = \sum_k F^l_{ik} F^l_{jk}
\\] 

논문에서는 스타일 이미지와 생성할 이미지의 Gram Matrix간의 차를 레이어별로 구한 값의 mean squared error를 style loss로 정의하고, 이 값이 포함된 total loss를 최소화시키는 방향으로 생성할 이미지를 업데이트해간다.

Gram Matrix는 파이썬으로 이렇게 구현한다.

```
def gram_matrix(tensor):
    shape = tensor.get_shape()
    
    num_channels = int(shape[3])
    
    matrix = tf.reshape(tensor, shape=[-1, num_channels])
    gram = tf.matmul(tf.transpose(matrix), matrix)
    
    return gram
```


<hr>


## Dataset

분석에 사용한 빈센트 반 고흐의 그림과 타 작가들의 풍경화는 <a href='https://www.kaggle.com/c/painter-by-numbers/data'>Kaggle</a>에서 가져왔다. wikiart.org에는 약 1500장 정도의 고흐 그림이 있는데 Kaggle 데이터셋에는 490장 정도다. 본 분석에서는 Kaggle 데이터셋이 반 고흐 그림의 전체 모수를 대변한다고 가정한다. 시간의 흐름에 따라 고흐의 'The Starry Night'과의 스타일 거리를 측정할 계획이므로 date 정보가 없는 4건은 제외하고, 'c.'같은 prefix는 모두 제거했다.

간단히 데이터를 살펴보자.

Kaggle 데이터셋에서의 연도별 고흐 작품 수는 1882년 이후 급증한다.

![연도별 고흐 작품 수](/assets/materials/20171009/byYear.png)


장르를 보면 sketch and study, landscape, portrait이 가장 많다.

![장르별 고흐 작품 수](/assets/materials/20171009/byGenre.png)

풍경화의 비중은 1887년 이후에 다시 크게 증가한다. 이전에도 비율은 비슷했으나 후반부에 더 작품 수가 많다. (이 데이터셋의 특성일수도 있다.)
(풍경화는 landscape, cityscape, cloudscape, marina를 포함하는 것으로 정의했다.)

![풍경화 연도별 작품 수 및 비율 추이](/assets/materials/20171009/landscapeByYear.png)


미술사적 스타일 분류로 보면 후기인상주의(Post-Impressionism)과 사실주의(Realism)이 가장 많다.

![장르별 고흐 작품 수](/assets/materials/20171009/byStyle.png)

Japonism이라고 특이한 단어가 보이는데, 1800년대 후반 서양예술판에 불어닥쳤던 <a href="https://en.wikipedia.org/wiki/Japonism">일본풍</a>으로, 당시 활동했던 고흐도 그에 영향을 받은 작품을 남겼다.

![Père Tanguy(1888)](/assets/materials/20171009/japonism.jpg)

<hr>

## Method

분석에 사용한 Neural Style Transfer 코드는 Siraj Raval의<a href="'https://www.youtube.com/watch?v=YoBEGQD3LCc'">How to Do Style Transfer with Tensorflow (LIVE)</a>에서 참조했다. Siraj는 pretrained CNN으로 VGG16을 사용했다. 나는 그 위에 아래와 같이 'calc_grams'와 'calc_style_distance' 두 함수를 구현하여 작품 간의 스타일 거리를 측정해보았다.


```
def calc_grams(path_img):
    ## returns gram layers of a given image path
    
    img = load_image(path_img, max_size=300)
    
    model = vgg16.VGG16()
  
    with tf.Session(graph=model.graph) as sess:
        feed_dict = model.create_feed_dict(image=img)

        layers = model.get_layer_tensors(list(range(3)))
        gram_layers = [gram_matrix(layer) for layer in layers]

        gram_layers = [l.eval(feed_dict) for l in gram_layers]
    return gram_layers
```

```
def calc_style_distance(path_a, path_b):
    ## returns style loss between two images
    
    grams_a = calc_grams(path_a)
    grams_b = calc_grams(path_b)
    
    losses = []
    for i in range(len(grams_a)):
        loss = mean_squared_error(grams_a[i], grams_b[i]).eval()
        losses.append(loss)
        
    return np.mean(losses)
```

위 코드를 보면 Gram Matrix를 계산하는 Layer를 처음 3개로만 한정지었다. 처음에는 첫 5개를 사용했었는데, 앞서 분류에 스타일을 사용한 논문을 읽고 3개가 더 성능이 좋았다길래 3개로 바꾸었다. 결과적으로는 내 분석 결과의 대세에 영향을 크게 주지는 않았다. 레이어를 고차원까지 다 넣으면 크게 2개의 문제가 있는 듯 하다. 본 논문에도 나왔지만, 보통 스타일이라고 할 수 있는 붓터치 스타일이나 직선/곡선의 사용은 저차원에 나타나고, 그러한 선이 결합된 형체인 컨텐츠는 고차원에 나타난다. 물론 그램 매트릭스는 액티베이션간의 상관관계이므로 컨텐츠와는 다르나, 어쨌든 고차원으로 가면 갈수록 컨텐츠가 묻어나오는 것은 피할 수 없는 듯 하다.

![이미지에서 스타일과 컨텐츠를 분리한다](/assets/materials/20171009/content_and_style.png)

두번째는 내 컴퓨팅 파워(ㅜㅜ)의 문제다. 첫 5개 레이어만 써서 1개 이미지의 그램 레이어를 뽑는데 한 10초~1분 사이 정도가 소요된다. 그래서 400개 이미지를 다 돌리면 한 2시간 정도는 걸렸다. 더 많은 레이어를 집어넣으면 그만큼 연산 시간이 오래걸리므로 빠른 결과를 위해서라도 전체 레이어를 넣을 수 없는 한계가 있었다. 분류 논문에서 전체 레이어를 사용한 것이 3개 쓴 것보다 성능이 훨씬 좋지 않으니 시간과 노력을 희생해서 굳이 레이어를 늘릴 이유가 없기도 하다. (정신승리)

한가지 새롭게 시도해본 것은 컬러채널이다. VGG는 처음부터 이미지를 컬러로 받는다. 처음 그대로 스타일 거리를 계산해보니 질감 뿐 아니라 색감이 영향을 많이 미쳤다. 'The Starry Night'이 푸른/초록/밝은노랑이 주 색상이기 때문에, 비슷한 스타일이라도 주 색상이 노랑이나 오렌지인 그림들이 거리가 멀게 나왔다. 이러한 이유로 컬러를 그레이스케일로 변환한다음, 이를 Red 채널로 밀어넣고 나머지를 모두 0으로 채워서 VGG에 밀어넣는 방식을 취해보았다.

![그레이스케일로 바꿔서 VGG에 밀어넣는 편법](/assets/materials/20171009/oneTone.png)


<hr>

## Output

<br>

### Distance from The Starry Night

먼저 원본 이미지 처리에 따라, RGB는 원본 이미지를, Gray는 그레이스케일로 컨버팅하였다.
또 장르에 따라 스타일 거리가 달라질 수 있으므로, 'landscape', 'cityscape', 'cloudscape', 'marina'를 풍경화(lanscape)에 따로 넣어 전체와 비교해보았다.
그 결과 'The Starry Night(1889)'와 스타일이 가장 가깝거나 먼 그림들은 아래와 같다.

!['The Starry Night'으로부터 가장 가깝거나 먼 그림들](/assets/materials/20171009/distance_from_TSN.png)

앞에서 간단히 설명했다시피, 컬러톤을 없애고 그레이스케일을 취한 Gray / all에서는 고흐 특유의 붓터치나 강렬한 선을 가진 다른 그림들이 가장 가깝게 나타났다. 그러나 풍경화에 대해서는 직관적으로 확 와닿지 않는다. Gray / landscape의 첫번째 그림은 중간에 물결치는 듯한 구름과 전반적인 선의 복잡함이 스타일 거리가 가장 낮게 나온데 일조하지 않았을까 추측해본다. 

RGB를 사용한 거리 측정에서는 스타일이 비슷하나 색감만 다른 이미지들을 멀다고 판정한 것이 너무 아쉽다. 그러나 전체나 풍경과 모두 비슷한 그림들은 단번 수긍이 가는 점에서 성능이 나쁘다고는 볼 수 없을 듯 하다. 또 스타일이라는게 질감 뿐만 아니라 색감 역시 포함하는 개념으로도 정의될 수 있으므로, 앞으로의 분석에서는 RGB를 사용하기도 했다. 또, 풍경화에서 'The Starry Night'의 스타일이 언제 등장했는지를 보는 것이 의미가 있을 듯 하여 장르 역시 풍경화로 한정한다.

<hr>

### Onset of The Starry Night

언제부터 고흐의 풍경화에서 'The Starry Night'과 비슷한 스타일이 등장했을까? 앞서 작품별로 'The Starry Night'과의 디스턴스를 구해두었다. 보통 값이 10^28 정도로 매우 높게 나와 직관적으로 이해하기 어려우므로, minmax scaling을 통해 0과 1 사이로 조정하였다. 0은 'The Starry Night' 자기 자신이 된다. 

풍경화의 표준화한 distance를 연도별로 취합한 다음 그 중간값의 추이를 살펴보면 아래와 같다.

![연도별 표준화한 distance 중간값 추이](/assets/materials/20171009/dist_byYear.png)

1878년부터 높게 형성되던 중간값이 1882년을 기점으로 뚝 떨어져서 이후에 계속 유지된다. 언뜻보면 1882년에 무슨 사건이 난 듯 하지만, 사실 풍경화 작품 수가 많지 않아 편향이 발생했을 가능성이 상당히 높은데다, 시각적으로 스타일이 비슷해보이지도 않는다.

![1882년작 중 스타일이 가장 비슷한 그림](/assets/materials/20171009/sim_1882.png)

아까 그레이스케일 계산에서 가장 가깝게 나왔던 그림인데, 수긍할 수 없는 결과다 ㅠ 또 미술사적으로 보면 Emerging artist로서 반 고흐의 커리어는 1883년부터인데다, 1882년에 그린 이 그림은 사실주의 그림이어서 이때부터 'The Starry Night'의 스타일이 시작되었다고 보기 어렵다. 1882년 이후로 끊어서 보면...

![1882년작 중 스타일이 가장 비슷한 그림](/assets/materials/20171009/dist_byYear_after1882.png)

1885, 1886년이 'The Starry Night'이 그려진 1889년과 가장 비슷하나, 작품 수가 역시 만지 않아 유의미하다고 보기 어렵다. 그림수가 많아지는 1887년 이후만 놓고 보면 결국 'The Starry Night'은 1889년부터 시작되었다고 결론지을 수 밖에 없을 듯 하다. 이는 1887년 이전에 풍경화가 많지 않은 데이터셋의 문제이기도 하나, 사실 Gram Matrix를 사용한 거리 알고리즘의 본질적인 문제라고 본다. 완전히 다른 색감과 질감을 가진 그림은 멀게 분류했으나, 사실주의와 후기 인상주의의 미세한 차이를 구분할 정도로 성능이 좋지는 않은 듯 하다.

'The Starry Night'과 거리가 가장 가까운 그림들을 찍어보면 아래와 같다. 내 시각과 주관은 거리가 0.03 이하인 1889년이 그 스타일의 시작이 아닐까 판단한다.

![스타일이 가장 비슷한 그림1](/assets/materials/20171009/from_sim1.png)
![스타일이 가장 비슷한 그림2](/assets/materials/20171009/from_sim2.png)

<hr>

### Other Starry Nights

여기까지만 하면 좀 아쉬우니 캐글 데이터셋을 좀 더 뒤져봤다. 다른 화가의 풍경화 중 'The Starry Night'과 가장 유사한 그림은 무엇일까? 가장 스타일이 비슷한 그림은 같은 미술사조에 속하거나 비슷한 시기에 그려진 작품들일까? 만약 그렇다면 Gram Matrix를 돌리느라 열받은 cpu의 노동이 헛되지 않았음을 증명할 수 있겠다.

캐글 데이터셋에서 풍경화 작품을 그린 작가 780여명을 뽑은 다음, 이들의 풍경화 작품을 1개씩만 선정했다. 이 중 샘플로 100개만 뽑아 'The Starry Night'과의 거리를 측정한 다음, 앞서 고흐 그림에 사용한 minmax scaling 값을 대입해 표준화된 distance 값을 산출했다.

스타일별 표준화된 distance 값의 중간값은 다음과 같다.

![스타일이 가장 비슷한 다른 미술사조](/assets/materials/20171009/otherLandscapes.png)

잘 모르는 단어들이 많이 나온다. 가장 중간값이 낮은 스타일은 Fauvism, Pop Art, Symbolism 순이다. 사실 다른건 몰라도 팝아트는 시대가 1980년대라 굉장히 의외라고 생각했는데..

![Italian Landscape Cypresses(Fauvism)(1902)](/assets/materials/20171009/Italian Landscape Cypresses(Fauvism).png)
![Omaggio a Francis Bacon(Pop Art)(1981)](/assets/materials/20171009/Omaggio a Francis Bacon(Pop Art).png)
![Rainbow(Symbolism)(1908)](/assets/materials/20171009/Rainbow(Symbolism).png)

시각적으로는 그럴듯 해보인다. 또 나머지 두 그림의 연도가 1889와 그리 멀리 떨어져있지 않다는데서, 꽤 그럴듯하게 들어맞았구나 생각이 든다.

앞서 반 고흐 그림을 가를때 기준을 0.03으로 잡았었는데, 그 기준에 부합하는 것은 Fauvism이 유일하다. Fauvism을 좀 찾아보니 우리말로는 '야수파'로, 사실적인 표현보다는 강렬한 색채를 강조해서 쓰는 미술사조인데 1904년부터 1910년까지 지속된, 상당히 짧게 유행한 스타일이라고 한다. 재미있는 점은, 야수파에 영향을 준 여러 화가 중 하나가 반 고흐이며, 야수파는 고흐의 후기인상주의의 익스트림한 버전이라는 설명이다. ("Fauvism can be classified as an extreme development of Van Gogh's Post-Impressionism fused with...")

샘플 데이터셋에서 또 다시 취한 샘플에서 나온 결과이지만, 해석적으로 그럴듯한 결과가 나온 듯 해서 기분도 좀 그럴듯 하다.


## Outro

Gram Matrix만 계산해서 간단하게 퉁치려고 했는데 추석 연휴 첫날 시작한 프로젝트를 추석이 끝나서야 마무리한다. 미술사적인 여러 정보와 섞어서 꽤 괜찮은 글을 쓰고 싶었는데 그러지 못한 핑계를 길면서도 짧았던 추석 휴일에 돌린다.


![The Starry Night (1889)](/assets/materials/20171009/TheStarryNight.jpg)


<hr>

## 참고자료  
https://www.youtube.com/watch?v=YoBEGQD3LCc  
https://www.wikiart.org/en/vincent-van-gogh  
https://en.wikipedia.org/wiki/Vincent_van_Gogh  
https://en.wikipedia.org/wiki/Fauvism  
https://en.wikipedia.org/wiki/Japonism  


