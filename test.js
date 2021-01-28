/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
var doc;
var cor;

	function onDeviceReady() {
		// Cordova is now initialized. Have fun!
	console.log('test log inside');

		console.log('Running cordova-' + cor.platformId + '@' + cor.version);
		doc.getElementById('deviceready').classList.add('ready');
		doc.getElementById('MSGREADY').innerText = 'Yo, Device is ready!';
	}

function startApp(pdoc,pcor) {
	doc = pdoc;
	cor = pcor;
	console.log('test log 1');
	console.log('test log 2a');
	doc.addEventListener('deviceready', onDeviceReady, false);
	console.log('test log 3');

	console.log('test log 4');
	
}
