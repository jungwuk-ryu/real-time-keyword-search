# 네이버 실시간 검색어
> 네이버 실시간 검색어를 가져오는 간단한 예제

[![HitCount](http://hits.dwyl.com/jungwuk-ryu/real-time-keyword-search.svg)](http://hits.dwyl.com/jungwuk-ryu/real-time-keyword-search)

node js및 카카오톡 봇으로 네이버 실시간 검색어와 유사 검색어를 가져오는 간단한 예제입니다.

## 사용 방법
### 카카오톡 봇 (Messenger Bot)
[forKakaotalkBot_full.js](https://github.com/jungwuk-ryu/NaverRealtimeSrcKeyword/blob/master/forKakaotalkBot_full.js) 파일을 봇 폴더에 넣어서 바로 사용할 수 있습니다.

### Node js
**request 모듈이 필요합니다.**

[main.js](https://github.com/jungwuk-ryu/NaverRealtimeSrcKeyword/blob/master/main.js) 파일을 다운로드 한 후, 터미널에서 아래 명령어와 같이 실행할 수 있습니다.
```
node main.js
```


## 출력

(2019년 8월 14일 오전 4시 기준) :

```
1. 리니지m
2. 인터 스텔라
3. 언페이스풀
4. 맨온파이어
5. 남윤국 변호사
6. 살인재능
7. 아이폰 se2
8. 러시아
9. 홍콩
10. 태풍 크로사
11. 솜혜인
12. 워킹걸
13. 광복절
14. 홍콩 시위
15. 60일 지정생존자
16. 오달수
17. 리틀 포레스트
18. 장윤정
19. 강백호
20. 솜해인
```

유사검색어 포함 출력 (2020년 1월 31일) :
```
1. 전현식
2. 봉국봉
3. 미국 독감 , 미국 독감 사망자
4. 김정민
5. 장미인애 , 장미인애 인스타
6. 궁금한이야기y
7. 봉신주
8. 박연차
9. 배우 전현식
10. 가수 김정민
11. 금요일 드라마 , 금토드라마
12. 오상진
13. 이해찬
14. 금요일 예능
15. 고령
16. 드라마 스토브리그
17. 검은사제들
18. 슬픈언약식
19. 성대현
20. 수원 어린이집 , 태안 어린이집
```
