---
title: "CSS 에서의 변수 컨트롤"
date: 2020-08-29 18:52
categories: html/css
---
## CSS 에서의 변수 컨트롤
변수 개념을 var()문을 이용해 css에서도 사용할수 있다  
이때 가상요소 :root 에 선언하면 전역변수화시킬 수 있다
``` css
:root {
  --font-size : 10px;
}

#tag2 {
  font-size: var(--font-size);
}
```
calc()문으로 값의 계산역시 가능하다
``` css
:root {
  --font-size : 10px;
}

#tag2 {
  font-size: calc(var(--font-size) * 10);
}
```
var()와 calc()를 적절히 조합하면 자바스크립트를 쓸 필요없이 화면구성을 조절할수 있다  
  
## HTML 의 data 속성
또한 html 태그에 data-{something} 의 으로 값을 저장해놓고, attr()문으로 뽑아쓸수도 있다  
이 정보는 자바스크립트에서도 뽑아 쓸수 있다 (나중에 정리할 예정)
``` html
<div id="tag" data-text="hello"></div>
```
``` css
#tag:after {
  content: attr(data-text);
}
```