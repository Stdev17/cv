import React from 'react';
import './App.css';
import './text.css';
import {
  Stage,
  Layer,
  Group,
  Image
} from 'react-konva';

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

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      src: null,
      JavaScript: null,
      TypeScript: null,
      Golang: null,
      Python: null,
      Docker: null,
      Fargate: null,
      Terraform: null,
      Lambda: null,
      API: null,
      S3: null,
      Dynamo: null,
      Athena: null,
      Aurora: null,
      MySQL: null,
      React: null,
      Koa: null,
      Mocha: null,
      Istanbul: null,
      Git: null,
      Codebuild: null,
      Codedeploy: null,
      Codepipeline: null
    };
  }

  componentDidMount() {
    const src = new window.Image();
    src.src = "/cv/src.png";
    src.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        src: src
      });
    };
    const JavaScript = new window.Image();
    JavaScript.src = "/cv/JavaScript.png";
    JavaScript.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        JavaScript: JavaScript
      });
    };
    const TypeScript = new window.Image();
    TypeScript.src = "/cv/Typescript.png";
    TypeScript.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        TypeScript: TypeScript
      });
    };
    const Golang = new window.Image();
    Golang.src = "/cv/Golang.png";
    Golang.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Golang: Golang
      });
    };
    const Python = new window.Image();
    Python.src = "/cv/Python.png";
    Python.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Python: Python
      });
    };
    const Docker = new window.Image();
    Docker.src = "/cv/Docker.png";
    Docker.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Docker: Docker
      });
    };
    const Fargate = new window.Image();
    Fargate.src = "/cv/Fargate.png";
    Fargate.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Fargate: Fargate
      });
    };
    const Terraform = new window.Image();
    Terraform.src = "/cv/Terraform.png";
    Terraform.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Terraform: Terraform
      });
    };
    const Lambda = new window.Image();
    Lambda.src = "/cv/Lambda.svg";
    Lambda.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Lambda: Lambda
      });
    };
    const API = new window.Image();
    API.src = "/cv/API.png";
    API.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        API: API
      });
    };
    const S3 = new window.Image();
    S3.src = "/cv/S3.png";
    S3.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        S3: S3
      });
    };
    const Dynamo = new window.Image();
    Dynamo.src = "/cv/Dynamo.png";
    Dynamo.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Dynamo: Dynamo
      });
    };
    const Athena = new window.Image();
    Athena.src = "/cv/Athena.png";
    Athena.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Athena: Athena
      });
    };
    const Aurora = new window.Image();
    Aurora.src = "/cv/Aurora.jpeg";
    Aurora.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Aurora: Aurora
      });
    };
    const MySQL = new window.Image();
    MySQL.src = "/cv/MySQL.jpg";
    MySQL.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        MySQL: MySQL
      });
    };
    const React = new window.Image();
    React.src = "/cv/React.svg";
    React.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        React: React
      });
    };
    const Koa = new window.Image();
    Koa.src = "/cv/Koa.png";
    Koa.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Koa: Koa
      });
    };
    const Mocha = new window.Image();
    Mocha.src = "/cv/Mocha.png";
    Mocha.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Mocha: Mocha
      });
    };
    const Istanbul = new window.Image();
    Istanbul.src = "/cv/Istanbul.png";
    Istanbul.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Istanbul: Istanbul
      });
    };
    const Git = new window.Image();
    Git.src = "/cv/Git.png";
    Git.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Git: Git
      });
    };
    const Codebuild = new window.Image();
    Codebuild.src = "/cv/Codebuild.png";
    Codebuild.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Codebuild: Codebuild
      });
    };
    const Codedeploy = new window.Image();
    Codedeploy.src = "/cv/Codedeploy.png";
    Codedeploy.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Codedeploy: Codedeploy
      });
    };
    const Codepipeline = new window.Image();
    Codepipeline.src = "/cv/Codepipeline.png";
    Codepipeline.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        Codepipeline: Codepipeline
      });
    };
  }

  render() {
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
          저는 하나의 세계를 창조할 수 있다는 매력을 알고 개발에 빠져들게 되었습니다.
          그리고 이제는 세상을 움직이는 서비스를 만들고 서비스의 가치를 더하고 싶습니다.
          그러기 위해 노동 중심보다는 시스템 중심으로 일하고, 이를 동료들과 힘을 합해 가꾸어 나가고 싶습니다.<br/><br/>
          저는 제가 백엔드 로직 개발 및 인프라 관리에 적성이 있다고 판단하였고, 이를 위한 기술 스택을 탐색해 보았습니다.<br/><br/>
          - 우선 프로젝트 진행에 필요한 의사 결정 능력을 갖추고, 동료들과 코드, 개발 이슈, API 스펙 등을 공유할 수 있도록 관련 기술을 익혔습니다.<br/>
          - 코드 품질을 관리하기 위해 정적 분석과 테스트 케이스를 관리하고, 지속적 통합/배포 파이프라인을 구축해 보았습니다.<br/>
          - RDB와 NoSQL에 걸친 데이터베이스를 활용하여 어플리케이션을 개발하였고, 인프라를 모니터링하며 서비스에 발생한 장애도 복구해 왔습니다.<br/><br/>
          앞으로도 협업을 위한 기술 스택과 커뮤니케이션 능력을 개발하여, 프로덕션에서 실질적으로 기여할 수 있는 능력을 키우고자 합니다.
        </div>
        <div className="marg" style={topicText}>
          <br/>
          Project
        </div>
        <Stage width={700} height={475}>
        <Layer>
        <Image
          x={0}
          y={20}
          width={700}
          height={455}
          image={this.state.src}
        />
        </Layer>
        </Stage>
        <div className="marg" style={plainText}>
        - ArenaTime (게임 대전 결과 DB)<br/>
        - <a href="https://github.com/stdev17/arenatime" target="_blank" rel="noopener noreferrer">https://github.com/stdev17/arenatime</a><br/>
        - <a href="https://stdev17.github.io/arenatime" target="_blank" rel="noopener noreferrer">https://stdev17.github.io/arenatime</a> 에서 테스트 해보실 수 있습니다.
        </div>
        <div className="marg" style={plainText}>
        하루에 API 호출이 3,000회가 넘어가는 인기 서비스입니다.
        단순 등록과 검색부터 시작해서, Batch-job으로 이루어지는 메타 통계가 존재합니다.
        서비스를 날로 거듭하며 장애율도 점차 낮아지고 있습니다.<br/><br/>
        우선 클라이언트 단에서는 React를 기반으로 CSS와 Konva, Bootstrap으로 UI를 구성했습니다.
        서버 단은 취미 프로젝트다 보니 비용 절감과 관리 편의를 위해 서버리스 환경으로 결정했습니다.
        Serverless 프레임워크를 기반으로, 웹 서버는 API Gateway, 컴퓨팅 엔진은 Lambda, 스토리지는 S3, DB는 DynamoDB를 채택했습니다.<br/><br/>
        대전 이미지 파일은 base64 인코딩으로 처리하여 S3에 적재 및 다운로드가 원활히 이루어지도록 했습니다.
        대전 결과는 DynamoDB에 적재하는 동시에, gzip으로 압축 및 aggregate하여 S3에 보관하도록 했습니다.
        이후 결과 파일을 Athena에서 Cloudwatch 스케줄링으로 주기적으로 Batch-job하여 DynamoDB에 담아두고 그 통계 결과를 서빙하도록 했습니다.
        또 Athena를 사용하여 실시간으로 결과를 서빙하는 API도 구현했습니다.<br/><br/>
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
        <Stage width={700} height={1030}>
        <Layer>
        <Group>
        <Image
          x={20}
          y={20}
          width={140}
          height={140}
          image={this.state.JavaScript}
        />
        <Image
          x={193.3}
          y={20}
          width={140}
          height={140}
          image={this.state.TypeScript}
        />
        <Image
          x={366.6}
          y={20}
          width={140}
          height={140}
          image={this.state.Golang}
        />
        <Image
          x={540}
          y={20}
          width={140}
          height={140}
          image={this.state.Python}
        />
        </Group>
        <Group>
        <Image
          x={100}
          y={190}
          width={140}
          height={140}
          image={this.state.Docker}
        />
        <Image
          x={280}
          y={190}
          width={140}
          height={140}
          image={this.state.Fargate}
        />
        <Image
          x={460}
          y={190}
          width={140}
          height={140}
          image={this.state.Terraform}
        />
        </Group>
        <Group>
        <Image
          x={20}
          y={360}
          width={140}
          height={140}
          image={this.state.Lambda}
        />
        <Image
          x={193.3}
          y={360}
          width={140}
          height={140}
          image={this.state.API}
        />
        <Image
          x={366.6}
          y={360}
          width={140}
          height={140}
          image={this.state.S3}
        />
        <Image
          x={540}
          y={360}
          width={140}
          height={140}
          image={this.state.Dynamo}
        />
        </Group>
        <Group>
        <Image
          x={100}
          y={530}
          width={140}
          height={140}
          image={this.state.Athena}
        />
        <Image
          x={280}
          y={530}
          width={140}
          height={140}
          image={this.state.Aurora}
        />
        <Image
          x={460}
          y={530}
          width={140}
          height={140}
          image={this.state.MySQL}
        />
        </Group>
        
        <Group>
        <Image
          x={20}
          y={700}
          width={140}
          height={140}
          image={this.state.React}
        />
        <Image
          x={193.3}
          y={700}
          width={140}
          height={140}
          image={this.state.Koa}
        />
        <Image
          x={366.6}
          y={700}
          width={140}
          height={140}
          image={this.state.Mocha}
        />
        <Image
          x={540}
          y={700}
          width={140}
          height={140}
          image={this.state.Istanbul}
        />
        </Group>
        <Group>
        <Image
          x={20}
          y={870}
          width={140}
          height={140}
          image={this.state.Git}
        />
        <Image
          x={193.3}
          y={870}
          width={140}
          height={140}
          image={this.state.Codebuild}
        />
        <Image
          x={366.6}
          y={870}
          width={140}
          height={140}
          image={this.state.Codedeploy}
        />
        <Image
          x={540}
          y={870}
          width={140}
          height={140}
          image={this.state.Codepipeline}
        />
        </Group>
        </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
