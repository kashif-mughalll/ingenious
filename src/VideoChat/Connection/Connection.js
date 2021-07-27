import IO from "socket.io-client";
import { store } from "./../../Redux/store";

var Connection = () => {
  const Socket = IO.connect("http://192.168.250.166:5000");

  Socket.on("connect", () => {
    console.log("connected with : " + Socket.id);
    Socket.emit("auth", store.getState().Auth.id);
  });

  Socket.on("disconnect", () => {
    console.log("disconnected");
    store.dispatch({
      type: "REMOVE_SOCKET",
    });
  });

  Socket.on("getSid", (sid) => {
    console.log("authentication success : "+ (sid == Socket.id));
    store.dispatch({
      type: "SET_SOCKET",
      payload: Socket,
    });
  });

  Socket.on("incomingCall", (data) => {
    console.log(data)
    console.log("incoimg call");
    store.dispatch({
      type: "SET_INCOMING_CALL",
      payload: {
        ...data,
        initiator: false,
      },
    });
  });
};

export default Connection;
