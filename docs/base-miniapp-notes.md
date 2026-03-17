# Base Mini App Notes

## 현재 반영 내용

- `.well-known/farcaster.json` 추가
- Base Mini App SDK 연결을 위한 브리지 코드 추가
- SDK가 없는 환경에서도 정보형 UI가 먼저 동작하도록 폴백 처리

## 배포 전에 채워야 할 값

- `homeUrl`
- `iconUrl`
- `imageUrl`
- `accountAssociation.header`
- `accountAssociation.payload`
- `accountAssociation.signature`

## 권장 다음 단계

1. 정적 호스팅 또는 Next.js 배포 환경 준비
2. 실데이터 API 연결
3. Base Mini App SDK 정식 패키지 사용으로 교체
4. 푸시 알림 서버 또는 스케줄러 구현
