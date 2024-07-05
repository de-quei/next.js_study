# next.js_study

file system으로 auto-routing 되는건 ㄹㅇ 신이다;;

---

### 1. CSR (Client Side Rendering)
> 모든 UI 구축 작업이 Client에서 일어나는 것 <br>
Client는 JavaScript를 로드하고, 그 후 JavaScript가 UI를 빌드함

### 2. SSR (Server Side Rendering)
> 모든 Component와 Page들은 먼저 Backend에서 render된다.

---

### Hydration
> SSR을 통해 만들어진 Interactive하지 않은 HTML을 Client 측 JavaScript를 사용하여<br>
Interative한 React Component로 변환하는 과정을 말함.