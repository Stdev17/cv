import React from 'react';
import logo from './logo.svg';
import './App.css';
import './text.css';

const topicText = {
  fontFamily: 'GyeonggiTitleM',
  fontStyle: 'normal',
  fontSize: 26,
  fontColor: '#333333'
}

const plainText = {
  fontFamily: 'GyeonggiTitleM',
  fontStyle: 'normal',
  fontSize: 20,
  fontColor: '#333333'
}

const smallText = {
  fontFamily: 'GyeonggiTitleM',
  fontStyle: 'normal',
  fontSize: 14,
  fontColor: '#333333'
}

function App() {
  return (
    <div className="App">
      <div style={plainText}>
      Min Yoon, Backend Engineer<br/>
      Phone: (+82) 10-5517-0290<br/>
      E-mail: stdev17@gmail.com<br/>
      Github: <a href="https://github.com/stdev17" target="_blank" rel="noopener noreferrer">https://github.com/stdev17</a>
      </div>
      <div className="marg" style={smallText}>
      ※ 병특 보충역 신규 희망합니다.
      </div>
      <div className="marg" style={topicText}>
        <br/>
        Objectives
      </div>
      <div className="marg" style={plainText}>
        테ㅐ스트
      </div>
      <div className="marg" style={topicText}>
        <br/>
        Projects
      </div>
      <div className="marg" style={plainText}>
      - ArenaTime (게임 대전 결과 DB)<br/>
      - <a href="https://github.com/stdev17/arenatime" target="_blank" rel="noopener noreferrer">https://github.com/stdev17/arenatime</a><br/>
      - <a href="https://stdev17.github.io/arenatime" target="_blank" rel="noopener noreferrer">https://stdev17.github.io/arenatime</a> 에서 테스트 해보실 수 있습니다.
      </div>
      <div className="marg" style={plainText}>
      하루에 API 호출이 3,000회가 넘어가는 인기 서비스입니다.
      단순 등록과 검색부터 시작해서, Batch-job으로 이루어지는 메타 통계가 존재합니다.
      서비스를 날로 거듭하며 장애율도 점차 낮아지고 있습니다.<br/>
      우선 클라이언트 단에서는 React를 기반으로 CSS와 Konva, Bootstrap으로 UI를 구성했습니다.
      서버 단은 취미 프로젝트다 보니 비용 절감과 관리 편의를 위해 서버리스 환경으로 결정했습니다.
      Serverless 프레임워크를 기반으로, 웹 서버는 API Gateway, 컴퓨팅 엔진은 Lambda, 스토리지는 S3, DB는 DynamoDB를 채택했습니다.<br/>
      대전 이미지 파일은 base64 인코딩으로 처리하여 S3에 적재 및 다운로드가 원활히 이루어지도록 했습니다.
      대전 결과는 DynamoDB에 적재하는 동시에, gzip으로 압축 및 aggregate하여 S3에 보관하도록 했습니다.
      이후 결과 파일을 Athena에서 Cloudwatch 스케줄링으로 주기적으로 Batch-job하여 DynamoDB에 담아두고 그 통계 결과를 서빙하도록 했습니다.
      또 Athena를 사용하여 실시간으로 결과를 서빙하는 API도 구현했습니다.<br/>
      Lambda 코드를 TypeScript로 이관한 후에는 정적 분석, 유닛 테스트, 커버리지 도구, API 스펙 문서화 도구를 사용하여
      코드 품질 관리를 연습하고 있습니다.
      </div>
      <div className="marg" style={topicText}>
        <br/>
        Stack
      </div>
      <div className="marg" style={plainText}>
        저는 이런 기술들에 관심이 있어요
      </div>
    </div>
  );
}

export default App;
