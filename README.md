# minSEO

## requires Next/Head

Search Engine Optimized (Next.js)

1. Component 아래에 jsx 저장
2. pages 아래 페이지들 return 상단 부분에 추가
3. 필요한 페이지에서 사용 
optional : public 아래에 defaultSEO.json 만들어서 사용하면 좋음

## How to use 

return (
    <>
      <MetaSEO
        title={SEOSheet.seo.title}
        keywords={SEOSheet.seo.keywords}
        description={SEOSheet.seo.description}
        ogType={SEOSheet.seo['og-type']}
        ogTitle={SEOSheet.seo['og-title']}
        ogDescription={SEOSheet.seo['og-description']}
        ogImage={SEOSheet.seo['og-image']}
        ogUrl={SEOSheet.seo['og-url']}
        indexing="all"
      />
      <Container>
        <Wrapper>
          {article}
        </Wrapper>
      </Container>
    </>
  );
  
  indexing = 'all' or 'none' 
  none이면 로봇이 해당 페이지를 수집하지 않습니다 !


## 외않되죠?

렌더링 타이밍 체크 
-> SSR이므로 useState 안에 들어가있으면 안됨
-> return false / return NULL 등 렌더링을 방해하는 요소가 있는지 app.jsx 나 컴포넌트, 페이지에서 확인하기


## 적용 후 확인 방법 

페이지 우클릭 -> 개발자 소스 보기 -> meta og 태그들이 있는지 확인 

공유 가능한 URL이라면 
https://developers.facebook.com/tools/debug/ 
-> 캐시삭제 = 일괄 무효화 도구
https://developers.kakao.com/tool/clear/og
-> 캐시삭제 = 초기화

후 Slack 이나 카카오톡, 페이스북, 인스타그램 등에서 링크 보내서 확인. . . 
