const {HelloRequest, HelloReply} = require('./generated/helloworld_pb.js');
const {GreeterClient} = require('./generated/helloworld_grpc_web_pb.js');


export const initGrpc = () => {
  var client = new GreeterClient('http://localhost:8080');
  
  var request = new HelloRequest();
  request.setName('Alec');
  
  client.sayHello(request, {}, (err, response) => {
    if (err) console.error(err);
    console.log(response.getMessage());
  });
}
