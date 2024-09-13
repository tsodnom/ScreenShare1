// const startButton = document.getElementById('startButton');
// const clientButton = document.getElementById('clientButton');
// const screenSharingVideo = document.getElementById('screen-sharing-video');
// const screenReceivingVideo = document.getElementById('screen-receiving-video');

// // Check if the browser supports screen sharing
// if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
//     alert('Screen sharing is not supported in this browser.');
// } else {
//     startButton.addEventListener('click', startScreenSharing);
// }

// function startScreenSharing() {
//     navigator.mediaDevices.getDisplayMedia({ video: true })
//         .then((stream) => {
//             screenSharingVideo.srcObject = stream;
//             startButton.disabled = true;
//         })
//         .catch((error) => {
//             console.error('Error accessing screen sharing:', error);
//         });
// }

// //Client button code
// clientButton.addEventListener('click', function() {
//     //alert("hello world");
//      // Create WebSocket connection to the server
//      ws = new WebSocket('ws://localhost:8080');

//      ws.onopen = () => {
//          console.log('WebSocket connection established.');
//          ws.send(JSON.stringify({ type: 'client-connect', message: 'Client is connected' }));
//      };

//      ws.onmessage = (event) => {
//          const data = JSON.parse(event.screenSharingVideo);   //event.data
//          if (data.type === 'screen-share') {
//              alert(data.screenSharingVideo); // Notify the client when screen sharing starts    data.message
//          }
//      };

//      ws.onerror = (error) => {
//          console.error('WebSocket error:', error);
//      };

//      ws.onclose = () => {
//          console.log('WebSocket connection closed.');
//      };

// // Send your offer or handle remote offer/answer exchange

// });