import logo from './logo.svg';
import './App.css';
import { Button, DetectRelGraph } from '@syhan-antsome/ant-component';

function App() {
  return (
    <div className="App">
      <Button label="this is my button home" />

      <br /><br />

      <DetectRelGraph nodeData={{
        mainIp: "123.112.33.44",
        detect: {
          inside: [{
            nodeIp: "211.11.22.33",
            lineIp: "11.55.23.98",
            inout: "IN"
          }],
          outside: [{
            nodeIp: "211.11.22.33",
            lineIp: "11.55.23.98",
            inout: "IN"
          }]
        },
        result: {
          inside: [{
            nodeIp: "111.11.22.11",
            inout: "OUT"
          }, {
            nodeIp: "111.11.22.22",
            inout: "OUT"
          }, {
            nodeIp: "111.11.22.33",
            inout: "IN"
          }],
          outside: [{
            nodeIp: "211.11.22.11",
            inout: "IN"
          }, {
            nodeIp: "211.11.22.22",
            inout: "IN"
          }, {
            nodeIp: "211.11.22.33",
            inout: "OUT"
          }, {
            nodeIp: "211.11.22.44",
            inout: "OUT"
          }, {
            nodeIp: "211.11.22.55",
            inout: "IN"
          }]
        }
      }}/>


    </div>
  );
}

export default App;
