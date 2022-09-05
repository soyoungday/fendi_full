

[![펜디](https://soyoungday.github.io/fendi_full/images/fendi-watches-logo-w-1.png)](https://soyoungday.github.io/fendi_full/)
<br>
<br>
<br>
 # 프로젝트명 : FENDI Clone Coding
✨ Description
펜디는 여성, 남성, 키즈 상품을 판매하는 명품 브랜드 입니다.

## 제작기간 : 5일
## 사용한 기술스택 : hHTML, CSS, Javascript
## 사용 기술 : 
### 1. 검색 최적화를 위한 오픈그래프(The Open Graph protocol)
웹 페이지가 `소셜 미디어(페이스북)` 등 공유될 때 우선적으로 활용되는 정보를 지정

```html
og:type: 페이지의 유형(E.g, website, video.movie)
og:site_name: 속한 사이트의 이름
og:title: 페이지의 이름(제목)
og:description: 페이지의 간단한 설명
og:image: 페이지의 대표 이미지 주소(URL)
og:url: 페이지 주소(URL)
```

### 2. SEO (검색 엔진 최적화, Search Engine Optimization)

```html
	<meta property="og:image" content="./images/fendi-watches-logo-w-1.png" />
	<meta property="twitter:image" content="./images/fendi-watches-logo-w-1.png" />
```

### 3. 사용폰트 : 나눔고딕
구글폰트  사용
```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

### 4. 아이콘 : Swiper slide

```html
	<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
```

### 5. lodash를 활용하여 scroll함수 제어하기

scroll이벤트가 계속 실행되면 사이트가 무거워 질 수 있으므로 이런 부분을 제어 할 수 있는 플러그인이 lodash를 사용

### 6. Fullpage 스크립트를 이용해 스크롤 시, 페이지 단위로 움직이게하기

화면은 풀로 꽉 차고, 스크롤 바는 없으며, 조금만 스크롤을 내려도 다음 섹션으로 페이지 단위로 넘어가게
깔끔하게 제작

### 7. Swiper Slider

메인 슬라이드 이미지를 Swiper slider를 사용
