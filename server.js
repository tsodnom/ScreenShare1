// const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: 8080 });

// wss.on('connection', function connection(ws) {
//     ws.on('message', function message(data) {
//         console.log('received:', data);

//         // Broadcast the message to all clients except the sender
//         wss.clients.forEach(function each(client) {
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//                 client.send(data);
//             }
//         });
//     });

//     ws.send('Connected to WebSocket server');
// });

// console.log('WebSocket server is running on ws://localhost:8080');
