

WebSocket is used when we need real-time communication between client and server.


1)Real-time notifications
2)Chat applications
3)Live dashboards
4)Video consultation updates


#)Libray we are using
npm install sockjs-client stompjs



In our project, we implemented WebSocket to handle real-time notifications. We used Spring Boot WebSocket with STOMP protocol on the backend and SockJS with STOMP client in Angular. When the server generates an event, it pushes the message to a topic and Angular subscribes to that topic to receive updates instantly


-----------------------------------------
Server sends message
       ↓
Topic receives message
       ↓
Angular subscriber receives message
       ↓
UI updates instantly
-------------------------------------------

#)IN Poject how we implmnet?

In our project we used WebSocket to implement real-time notifications. We configured Spring Boot WebSocket with STOMP protocol and created a WebSocket endpoint. Angular connects to this endpoint using SockJS and STOMP client. The frontend subscribes to topics, and whenever the server publishes a message, the client receives it instantly and updates the UI.

---------------------------------------------------------------------------------
SockJS is used to establish the WebSocket connection, and STOMP is used to send and receive messages over that connection
-------------------------------------------------------------------------------------

Why Do We Use STOMP Instead of Pure WebSocket?
(Simple Text Oriented Messaging Protocol) adds structure to WebSocket communication.

First understand the main idea.

WebSocket only provides a connection, but it does not define how messages should be structured or routed.
STOMP provides a messaging protocol on top of WebSocket that makes communication easier and more organized.
---------------------------------------------------


Problem with Pure WebSocket

If we use only WebSocket:

Messages are just raw text or JSON

No standard format

No built-in concept of topics or subscriptions

Harder to manage messaging in large applications

----------------------------------------------------------------
“Why do we use SockJS with WebSocket?”

Answer:

SockJS provides fallback options if WebSocket is not supported by the browser or blocked by firewalls.

----------------------------------------------------------------
“What happens if the WebSocket connection drops? How do you handle reconnection?”

Problem
WebSocket connection can drop because of:
Network issues
Server restart
Internet disconnect
Idle timeout

If the connection drops, the client will stop receiving real-time updates.
So we must implement auto reconnection

---------------------------------------------------------------------
Solution: Reconnect Automatically
When the connection closes, we try to reconnect again after some time.
------------------------------------------------------------------------

In our application we implemented automatic reconnection logic using STOMP client. If the WebSocket connection drops due to network issues, the client automatically tries to reconnect after a few seconds and re-subscribes to the required topics so that real-time updates continue without manual refresh.


