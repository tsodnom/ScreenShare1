const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// When a client connects to the WebSocket server
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send a message to the client
    ws.send('Connected to WebSocket server');

    // Handle incoming messages from the client
    ws.on('message', (message) => {
        console.log('Received:', message);
        // Broadcast the message to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
