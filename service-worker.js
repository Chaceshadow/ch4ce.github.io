/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/05/25/XSS/index.html","89bc74f2675d07b4f3facd9968f3c86a"],["/2020/06/02/hello-world/index.html","add17a7643b73d75269a1b6aa84d26dc"],["/2020/06/03/PhpStudy2018后门漏洞预警及漏洞复现&检测和执行POC脚本/1.png","a401e199a0bb9a9e8fdd6f8dd95a94f3"],["/2020/06/03/PhpStudy2018后门漏洞预警及漏洞复现&检测和执行POC脚本/2.png","4b5e5aa89652d9fd553f867132e2ad6b"],["/2020/06/03/PhpStudy2018后门漏洞预警及漏洞复现&检测和执行POC脚本/3.png","ba9a1e10eda0ea948eab46308b431f58"],["/2020/06/03/PhpStudy2018后门漏洞预警及漏洞复现&检测和执行POC脚本/4.png","bd03a3009b784470bb7e755eab7ef392"],["/2020/06/03/PhpStudy2018后门漏洞预警及漏洞复现&检测和执行POC脚本/index.html","c67b1cc796319a66497f7e7d828f5845"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/1.png","c99d52714cafc1ad0a4db12e80f8380f"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/2.png","2083618377e81878db4a06b2db55f378"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/3.png","594d3981331b43ed087de36b0b616cea"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/4.png","06d51fca2c4bbaeb2c584008253e2e87"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/5.png","0ca727f75dbd52e416eae1fac2eb776a"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/6.png","3558d20431b6e1c9fbba2d9d40e522c6"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/7.png","d358ed660f2ee4b6cc7c3cac76105a75"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/8.png","960545102abf1d6c77e0984e161cb79f"],["/2020/06/03/Tomcat文件包含漏洞的搭建与复现：CVE-2020-1938/index.html","150a14de7382b312a512c9438999f9cd"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/1.png","56d0ae4f76c8d4b301941c76a74dddec"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/10.png","66f33408da1f8d3a340cbddec81f88ea"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/11.png","43a30d8401d3610a473aa8872369df6d"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/12.png","76930559ac9da7d11e5b8ad4f17dd3a2"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/13.png","1385a75f491ab4ae1db4a6bc75a7e95b"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/14.png","dbe0fe8038d28a89baf2be3e7cca49ce"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/15.png","f04459aa22b631956176af9222e0057a"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/16.png","405a9918875119ab40c5e8446a1c94f6"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/17.png","8feadd38f55f3967a6131764099217b3"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/2.png","25c2b134bfd6971d99fe14adb63284fa"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/3.png","3b422c48013f0793376234962fa79160"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/4.png","ce5362df836fbfea880a5f7ba288de9a"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/5.png","f1c0ae2fa7e5ffe5e85241f97127eb72"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/6.png","17cdecbc20c7984fe6adeb9abec70197"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/7.png","6a54b821db95704b692a335773337b6e"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/8.png","c0839c6afc786c4c267145d25464f5d8"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/9.png","6f539438d30e9c1c16c833f5b8092a05"],["/2020/06/09/CVE-2020-0796-SMBv3-RCE漏洞检测-复现/index.html","7213e015e9dde137be0704398e517aac"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/1.png","790d958245e85aa14d0268bb8bffb1a2"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/2.png","e7867e54c0d32aa424481c25211bd599"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/3.png","1c3f5135cd2062d028eb6e5cc748c680"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/4.png","b31a046846b79db1afad6666caf267f5"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/5.png","10773df3d5c10fe8a7558216b0b06198"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/6.png","500e21d67541181f8f0a356b08dfe669"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/7.png","78fddce3991540d0d877a2016768bc96"],["/2020/06/09/ThinkPHP-5-代码执行漏洞复现-POC/index.html","8a68c8091dc7b9d25ff036e0adfd9bd1"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/1.png","13bd0bedaa51cfbd08e37e71a20554e3"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/10.png","be459fc8b2c79c5fbca720d3120483a4"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/11.png","fcb58a10dfc49379de386e10ab9bda95"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/12.png","4351c298b8288c5437636b501c6fbd43"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/13.png","cb79aa67b0a2d20c800dcecff4cfb922"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/14.png","a9a11e2ae038f221fd91262a724ac55d"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/15.png","9c1e768d5000136ebd740fe5f791faf7"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/16.png","d1ecab6a725cb33ac3398f381db3be03"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/17.png","f6d3e530d6ce6a0c7434b312136995aa"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/18.png","1088a8e56d8965054dba3d7271c7ff57"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/2.png","f8f94c33e193e2c9dd8d6341ef8a8936"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/3.png","991245ee0b48dbed24348d78a81c8904"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/4.png","2111c762e10d945e2774830ff4325f13"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/5.png","343a4b517e5c8eebe6496f60aed7d66c"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/6.png","1c9462e76e6fe7b951cf74cad4949588"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/7.png","14bc8656dd184a3ea8cc3d8214537f36"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/8.png","a6252b3361997c3d0b686f5befb6bbba"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/9.png","01abbb3cfbe5510d900e289c9dc1a70d"],["/2020/07/11/CVE-2020-5902：F5-BIG-IP-远程代码执行漏洞复现/index.html","25c288fc1056d826f62904cd2d050680"],["/2020/07/11/HW-HD-DYK/index.html","4613b1a9f9bd612e0f3d37dcbe41b5d3"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/1.png","fee180cd97107ffda18634ca9dee43da"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/10.png","5fc48cd30ea0af7b113044a4794041ef"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/11.png","3b15591d72c0461e166fbb77e16004c1"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/12.png","898d4af759621eb71d9c44899ae1bd1f"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/13.png","08f6f2d8d02330592f4439eda23e2d48"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/14.png","666540c5e1f0756eca8c38a493b7abad"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/15.png","5163af000bfe32da9cfec322ed1f4ab4"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/2.png","44311276fd0aa1c095843d5bd971db69"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/3.png","1f32e8adcd3db9ea97b63684bcd5bd5c"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/4.png","db34cc90f000a6e1d7d4fdc86f31f958"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/5.png","dce5acd661775b1340481327944ec444"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/6.png","0e3653c19db8911d2fbb97f635817fc4"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/7.png","69b5f609ba4f23fb145a45156b18b3d8"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/8.png","b0343bde58edc0f6d67368ef380991d1"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/9.png","f9dba61126de4db4502b12fc8d3419f7"],["/2020/07/11/ThinkPHP5-核心类-Request-远程代码漏洞分析/index.html","3f1c1336f68a58a383196ff9391c45e5"],["/2020/07/11/禅道全版本rce漏洞复现笔记/1.png","76eadbdb44a3c17fa5eb81afd7110a51"],["/2020/07/11/禅道全版本rce漏洞复现笔记/10.png","d7428fba953f133f235f45cd67ea8eb0"],["/2020/07/11/禅道全版本rce漏洞复现笔记/11.png","5bada9856e5c82330d23048c74f4eafa"],["/2020/07/11/禅道全版本rce漏洞复现笔记/2.png","7ba0725afb59167e472381b94bc7e2de"],["/2020/07/11/禅道全版本rce漏洞复现笔记/3.png","2fc4b4d0cacec13bada1c82741532453"],["/2020/07/11/禅道全版本rce漏洞复现笔记/4.png","f75ac4093230b56feb41b414f7d38c8d"],["/2020/07/11/禅道全版本rce漏洞复现笔记/5.png","2a5ff350200e856d292b4a72a24e7313"],["/2020/07/11/禅道全版本rce漏洞复现笔记/6.png","ed5192ca564d96e47f4525938fff83a2"],["/2020/07/11/禅道全版本rce漏洞复现笔记/7.png","e39e0f9686e14b4ced9df9a0f061b31c"],["/2020/07/11/禅道全版本rce漏洞复现笔记/8.png","289d5b5c317af7ccca802b02823be2ed"],["/2020/07/11/禅道全版本rce漏洞复现笔记/9.png","db38da0a4f5588d658590cf7866ca32f"],["/2020/07/11/禅道全版本rce漏洞复现笔记/index.html","550f4be739a329c2731280fbe5850b9e"],["/2020/08/23/IIS-PUT/1.png","a7f0e0e8888cf3972919d0692b33a6c1"],["/2020/08/23/IIS-PUT/10.png","b6d816bf9b0ae281d35543b6b72680f3"],["/2020/08/23/IIS-PUT/11.png","8de9ffcae1babe1ec977bebcbb1d4a4d"],["/2020/08/23/IIS-PUT/12.png","279bdc0ee967791bf0fb49403cbb12e5"],["/2020/08/23/IIS-PUT/2.png","66dd6367604e1e2961dd75662a2b630b"],["/2020/08/23/IIS-PUT/3.png","2e2908268a556af2e14d4179f1bf1cf5"],["/2020/08/23/IIS-PUT/4.png","d896279bea41dcffab70f585000afe32"],["/2020/08/23/IIS-PUT/5.png","7af8ed51c56079057ec8f7b65c0d0e75"],["/2020/08/23/IIS-PUT/6.png","f60848c3a80bf0e0891f1c5a2896dd7c"],["/2020/08/23/IIS-PUT/7.png","b344ff55f2d05096d8ac17676cd8b05f"],["/2020/08/23/IIS-PUT/8.png","e25321a519a52e9055cd99c9a61d0a83"],["/2020/08/23/IIS-PUT/9.png","e5f1f514aaca569c0045bb45359f90b0"],["/2020/08/23/IIS-PUT/index.html","ef6bc11042fb26f60bb3d449e31b9252"],["/2020/08/23/Tongda-OA11-6-Getshell/1.png","61cc9d3e435c488926c2c5a68d95d57b"],["/2020/08/23/Tongda-OA11-6-Getshell/2.png","fcd5d4c098d6ec26a2c2451f1930b363"],["/2020/08/23/Tongda-OA11-6-Getshell/3.png","51eb2d87c5d8126aac6ed01ba06b963c"],["/2020/08/23/Tongda-OA11-6-Getshell/4.png","4c48243166e56ab40f44606e888771ff"],["/2020/08/23/Tongda-OA11-6-Getshell/5.png","460fa1d2799e7e9fe11596512a440d17"],["/2020/08/23/Tongda-OA11-6-Getshell/6.png","b634fc15ddc407f7840941f80c4337b0"],["/2020/08/23/Tongda-OA11-6-Getshell/7.png","9cb4fd3715dba40bb6a2bad21e89394a"],["/2020/08/23/Tongda-OA11-6-Getshell/index.html","3726b5ca23c240534e143d794fce4e90"],["/2020/08/23/weblogic-CVE-2020-14645/1.png","cdbcefd6b17f6d46a21721929e42c155"],["/2020/08/23/weblogic-CVE-2020-14645/2.png","a4a4aa6155097006ac31a38bda03fada"],["/2020/08/23/weblogic-CVE-2020-14645/3.png","494f24e122c8e212107adc9771d79ff3"],["/2020/08/23/weblogic-CVE-2020-14645/4.png","6bb899e64e2ddf0371f78ca425856741"],["/2020/08/23/weblogic-CVE-2020-14645/5.png","324599f50aa86ffe42a8b43c025f56cf"],["/2020/08/23/weblogic-CVE-2020-14645/6.png","228088a23b46c1efbfbc26669353be15"],["/2020/08/23/weblogic-CVE-2020-14645/7.png","3809859898dd32a3782ce1650997fd1f"],["/2020/08/23/weblogic-CVE-2020-14645/8.png","591a075c8da00cc4d2d8d5ceaa1879a9"],["/2020/08/23/weblogic-CVE-2020-14645/index.html","e581af1dfc12c8b656d67327afcbe45c"],["/2020/08/23/weblogic-CVE-2020-2883/1.png","46ae3072594e468b230d21e6aa152442"],["/2020/08/23/weblogic-CVE-2020-2883/2.png","f0d802660a0e066980da128b313685ed"],["/2020/08/23/weblogic-CVE-2020-2883/3.png","5143eb65e99272953fc7e477401387a4"],["/2020/08/23/weblogic-CVE-2020-2883/4.png","8adf456a1e9333536474d3db7a7e84cf"],["/2020/08/23/weblogic-CVE-2020-2883/5.png","c1f5db397f5243aced0f6a5f89487674"],["/2020/08/23/weblogic-CVE-2020-2883/6.png","faac6bec72d74e7b5e8a2455a9b8aedf"],["/2020/08/23/weblogic-CVE-2020-2883/7.png","a3ac94d56c984c8b23cc584c6c44121b"],["/2020/08/23/weblogic-CVE-2020-2883/index.html","3cd89a34b1b887801a799ef171c3a6e1"],["/2020/09/28/ATC-CK-Vulnstack-1/1.png","bc24846c88819941cd1ee67ba1a6bda7"],["/2020/09/28/ATC-CK-Vulnstack-1/10.png","adc8a78734594e601be2ee4e292f31be"],["/2020/09/28/ATC-CK-Vulnstack-1/11.png","7813b0806afa7f3724aeb528a7dcf611"],["/2020/09/28/ATC-CK-Vulnstack-1/12.png","c09f6d558ed8f61c8b0e3d5445d67278"],["/2020/09/28/ATC-CK-Vulnstack-1/13.png","86817d6a39323d6e445f04d18bf0138f"],["/2020/09/28/ATC-CK-Vulnstack-1/14.png","2add8b7c3f353b1bcbb58e376ef5c6b4"],["/2020/09/28/ATC-CK-Vulnstack-1/15.png","12ea40365fb97c0e1047bd2671ea4bc4"],["/2020/09/28/ATC-CK-Vulnstack-1/16.png","91c1acad9ad4cf28a683bac62f39eb80"],["/2020/09/28/ATC-CK-Vulnstack-1/17.png","7729e58ebe812494736064873db5c89b"],["/2020/09/28/ATC-CK-Vulnstack-1/18.png","78b74901244d49f857a240f67829096e"],["/2020/09/28/ATC-CK-Vulnstack-1/19.png","c6cbce4def9db697e6cce1003e64ce76"],["/2020/09/28/ATC-CK-Vulnstack-1/2.png","ebea0117b699400ba379cf2f5113ac53"],["/2020/09/28/ATC-CK-Vulnstack-1/20.png","d3d3c0778e384e9831d188cc038ad52f"],["/2020/09/28/ATC-CK-Vulnstack-1/21.png","4c25a33ded313c631b78a170d0c6d785"],["/2020/09/28/ATC-CK-Vulnstack-1/22.png","b18a5ae9444a4b689318e733ad48c712"],["/2020/09/28/ATC-CK-Vulnstack-1/23.png","a86cb90aa3b3ca8daa616964876d1d36"],["/2020/09/28/ATC-CK-Vulnstack-1/24.png","6de765cec1b36d596a1c7e18feaac207"],["/2020/09/28/ATC-CK-Vulnstack-1/25.png","1e9b8b8bcd3e467f655d2f73291e9b42"],["/2020/09/28/ATC-CK-Vulnstack-1/26.png","218d134c7e27c5988e4781133c5bdaf9"],["/2020/09/28/ATC-CK-Vulnstack-1/27.png","e267e18a3af8313f182a7f8f57373e00"],["/2020/09/28/ATC-CK-Vulnstack-1/28.png","68e264eec9a1c468beeb95a8c605da87"],["/2020/09/28/ATC-CK-Vulnstack-1/29.png","3261a2a6282633f7de926f510e9a2e0f"],["/2020/09/28/ATC-CK-Vulnstack-1/3.png","d8d463afa1d8cf013cd6efb2e16ce002"],["/2020/09/28/ATC-CK-Vulnstack-1/30.png","eec02c0379e1b7aa2217b622a581eb3b"],["/2020/09/28/ATC-CK-Vulnstack-1/31.png","41b43b280c25208b3806bf835541d4b1"],["/2020/09/28/ATC-CK-Vulnstack-1/32.png","364570ebe622821294c626fd4e2bb90e"],["/2020/09/28/ATC-CK-Vulnstack-1/33.png","58eebb501b503f8f0bbb0a2c67035884"],["/2020/09/28/ATC-CK-Vulnstack-1/34.png","0fdedec11eb7f209215f8080bd4283d9"],["/2020/09/28/ATC-CK-Vulnstack-1/35.png","54db9825fe796bb19e98919035717dd5"],["/2020/09/28/ATC-CK-Vulnstack-1/36.png","0edafad9f049f472327fa8dfd0a5c29f"],["/2020/09/28/ATC-CK-Vulnstack-1/37.png","33d5fbf0e0e82a7f251e871cc58ffb6b"],["/2020/09/28/ATC-CK-Vulnstack-1/38.png","f840b0f21fd61e6877401889324d9607"],["/2020/09/28/ATC-CK-Vulnstack-1/39.png","ff3ec63c1ff2eff39299932ed4a6e2a1"],["/2020/09/28/ATC-CK-Vulnstack-1/4.png","0f87cc3e5e3ccdba76119a32cf7f9101"],["/2020/09/28/ATC-CK-Vulnstack-1/40.png","6c63f28eb0a340e3acc3241691ee0857"],["/2020/09/28/ATC-CK-Vulnstack-1/41.png","ce4de3139d04e99e5d2c6509d02919a4"],["/2020/09/28/ATC-CK-Vulnstack-1/42.png","e798facf0860a4a9f7f196c676e63ebe"],["/2020/09/28/ATC-CK-Vulnstack-1/43.png","b75eacff138086f595126cf90abe1983"],["/2020/09/28/ATC-CK-Vulnstack-1/44.png","88f68f4cb576d0fc72ce83ec0f829036"],["/2020/09/28/ATC-CK-Vulnstack-1/45.png","c215c476dc8de889b20b76233d53d909"],["/2020/09/28/ATC-CK-Vulnstack-1/46.png","bb59b17dd958136869496c8f9ae62ed1"],["/2020/09/28/ATC-CK-Vulnstack-1/47.png","d7cc9cfb90e384b9e0324ffdc19bf188"],["/2020/09/28/ATC-CK-Vulnstack-1/48.png","f2c87dd84c99e1bdb985a73785289825"],["/2020/09/28/ATC-CK-Vulnstack-1/49.png","5d1af6b34e4e2334443f15ac8b47b7ce"],["/2020/09/28/ATC-CK-Vulnstack-1/5.png","9937767cad984120e84f538ed93c7d0a"],["/2020/09/28/ATC-CK-Vulnstack-1/50.png","4beb90d4b4b938f503ac4f1054b97505"],["/2020/09/28/ATC-CK-Vulnstack-1/51.png","fea0f7dbdeda509080551d9a417e7d52"],["/2020/09/28/ATC-CK-Vulnstack-1/52.png","d147e3b01964de0799928e536d5e6cef"],["/2020/09/28/ATC-CK-Vulnstack-1/53.png","07efa568369b6559d5a90bf12e476c7d"],["/2020/09/28/ATC-CK-Vulnstack-1/54.png","a6aa119b1c397648ce167ffdf871121f"],["/2020/09/28/ATC-CK-Vulnstack-1/55.png","a78726a9e24c786c5f5539dad013f08c"],["/2020/09/28/ATC-CK-Vulnstack-1/56.png","514e5d108abc01bc0f5204173acdcc05"],["/2020/09/28/ATC-CK-Vulnstack-1/57.png","5e119701ca041013944b8a9d71b9d415"],["/2020/09/28/ATC-CK-Vulnstack-1/58.png","7f8c58fc2373e7f988316cdbe94d4671"],["/2020/09/28/ATC-CK-Vulnstack-1/59.png","8687663e07fa6c7aa51ea82e9b191188"],["/2020/09/28/ATC-CK-Vulnstack-1/6.png","502ec7e6c8b7189c3d89223736d0a953"],["/2020/09/28/ATC-CK-Vulnstack-1/60.png","2765c77363b9b11054fbcdba3db07cac"],["/2020/09/28/ATC-CK-Vulnstack-1/7.png","724401fb7ebeef056c3bd0849065bf6a"],["/2020/09/28/ATC-CK-Vulnstack-1/8.png","949e487d1523b438b0f9a8d25164a7a4"],["/2020/09/28/ATC-CK-Vulnstack-1/9.png","c8cb9ef3e2c22984ca47f18727d50587"],["/2020/09/28/ATC-CK-Vulnstack-1/index.html","91c962925b0e706183b594cf9b8a82e3"],["/2020/09/28/Software-Test-Practice-Guide/1.png","fdf63a9530035794220b96dc2b0dea98"],["/2020/09/28/Software-Test-Practice-Guide/2.png","5f5344ba70605b979bf0fa5b72ef1e17"],["/2020/09/28/Software-Test-Practice-Guide/3.png","b3bfbe068e12d08624852c96025fe261"],["/2020/09/28/Software-Test-Practice-Guide/index.html","13dea15b0981af31460b6ae8d0feeda6"],["/2020/09/28/The-Security-of-Software-Evaluation/index.html","5a863012178e42c967266e5bd8ea745b"],["/2020/09/29/DomainPenetration/1.png","5573637cd9c4a3ac7e120566509867a6"],["/2020/09/29/DomainPenetration/10.png","22b27d5601c50739f72f55999643287e"],["/2020/09/29/DomainPenetration/11.png","758a15d4cc4561c40c31af0273340d02"],["/2020/09/29/DomainPenetration/12.png","aa43da580e82225c490a203b5e8b5d02"],["/2020/09/29/DomainPenetration/13.png","5aeb864776363640f9831f1a0708b59f"],["/2020/09/29/DomainPenetration/14.png","100876be5191a7eb029dfc2c85e920c7"],["/2020/09/29/DomainPenetration/15.png","826dfadd6b182573ad530ea6716af677"],["/2020/09/29/DomainPenetration/16.png","0a3007f6e2a2e9ede03c4546bce61b72"],["/2020/09/29/DomainPenetration/17.png","85d92b96f6a6df964abe0d06167f2d24"],["/2020/09/29/DomainPenetration/18.png","9ef7a5d9ef3ce81f544e463cdfc4425c"],["/2020/09/29/DomainPenetration/19.png","ba51aa8c83230ffb601ec8f827bcf982"],["/2020/09/29/DomainPenetration/2.png","47f40db9a32083d88597da403805eaf3"],["/2020/09/29/DomainPenetration/20.png","7a5428f8df1ebc4a6043e4b34f2f7061"],["/2020/09/29/DomainPenetration/21.png","c2acbe8690b265685800af675e8e8e15"],["/2020/09/29/DomainPenetration/22.png","46517bcb1f0c270aa919a0bb6b14f2c8"],["/2020/09/29/DomainPenetration/23.png","694934f761c556fff383ba524715c138"],["/2020/09/29/DomainPenetration/24.png","ab0ded9fa0a701246bf16a563be839b4"],["/2020/09/29/DomainPenetration/25.png","c68024e0f089db90e43bb67f86decc3e"],["/2020/09/29/DomainPenetration/26.png","4a7313711417b740ca7185ae1f355ac9"],["/2020/09/29/DomainPenetration/27.png","ae3d56032cd0cba7664ad229f9132af0"],["/2020/09/29/DomainPenetration/3.png","2e0e3f638b13cc16ad126f4f7f210325"],["/2020/09/29/DomainPenetration/4.png","c1d55fb986e96d5997bb8830262cb2e3"],["/2020/09/29/DomainPenetration/5.png","76dc8b2acd1a12c677684891ab727512"],["/2020/09/29/DomainPenetration/6.png","4e17cbf1063745f3605788cf3df740c0"],["/2020/09/29/DomainPenetration/7.png","5b5d06bbd85d3e721c8a72c90b2eb36c"],["/2020/09/29/DomainPenetration/8.png","0acd372751bd42fb26b693479fa86d9e"],["/2020/09/29/DomainPenetration/9.png","37ea8818eb2d02faa108b3eb89a2c13c"],["/2020/09/29/DomainPenetration/index.html","13aeae4e09644fa37b3b5f8bc2b7f525"],["/404.html","3f42a5a3cd2846c344d09cf80cadddb0"],["/about/index.html","4f13c4097f1862110ad4c819ca7c06a0"],["/archives/2020/05/index.html","e070a9207be5beacc09e5b1a09e193ae"],["/archives/2020/06/index.html","819de4dfc40d88a7df6c6575c98edd8b"],["/archives/2020/07/index.html","d8706e28b07d7f4ed70ca761324e6abe"],["/archives/2020/08/index.html","5c9722bb117385087e81124091cd294d"],["/archives/2020/09/index.html","8468465e4a4e704d688349d047445c4c"],["/archives/2020/index.html","0b67b146013fdfdcca3795ccc7eabff1"],["/archives/2020/page/2/index.html","ec749efaf6e8e36cfd9b299f374442e4"],["/archives/index.html","c22e3d99be1e24da086c0345daa9ffd1"],["/archives/page/2/index.html","58956bb933f52ecac460203261039b08"],["/categories/index.html","3a0629bc47c8f0ca1d80cf5225a326d6"],["/categories/安全攻防/index.html","620796c4e930794ebf2cfa79a34d50cd"],["/categories/实战靶场/index.html","a4085f10be7ef45fb3c6f75e202468b8"],["/categories/渗透测试/index.html","233862c44bf7b09f6f3d8235cd40d997"],["/categories/漏洞复现/index.html","3112adf1988f03c0b27a15d465bb838f"],["/categories/漏洞复现/page/2/index.html","6ef4d29489b12fd062aa04771d79d119"],["/categories/笔记/index.html","b61ffbc2f034936f3a7e882965bc4ce4"],["/categories/软件测评/index.html","75fb9b2934b4a4452bd0c6f264c43703"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/index.css","75f88391c88fdbe7f119e327528b90e5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/favicon.png","9dcaab7e0be88749b32b6a87ad6e7e65"],["/gallery/index.html","1d6b0d2e6bb7bf9f43bbd212e18ada66"],["/images/pwaicons/128.png","ddc4aeb55a60775213d1da9c034632db"],["/images/pwaicons/16.png","fc1876944e7af309430cf27422cd1423"],["/images/pwaicons/24.png","769d026db5e7934e9a056e7f6b66d21e"],["/images/pwaicons/256.png","705f84047d89357034a60e3aa033d1c6"],["/images/pwaicons/32.png","7e09a6f7c9631b370435f8c617e985b2"],["/images/pwaicons/512.png","b0336f3b090533a0556bcb32df0e2a36"],["/images/pwaicons/64.png","2262897941bf3e779b6eae7856667cc0"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","640877c59dd563d6530228316fc29caf"],["/index.html","37db246929dc6c8c5963c244d67cc721"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","2afa3059930bf00ba0e01a419eb797e8"],["/page/3/index.html","7b420b1ac340b83b9082835efe620f93"],["/page/4/index.html","bed3c5cde5755c9a1f3ceff25d77bc85"],["/slides/index.html","e726c56cdd7999df95a402b21b9cf5f7"],["/tags/ATK-CK/index.html","b280ced21a2c99f6c699950303afdf28"],["/tags/BIG-IP/index.html","80effd77c0b46adfc4be33c99e3c2477"],["/tags/CVE-2020-0796/index.html","2a270d43d81ddc36d4682c2056432d1d"],["/tags/CVE-2020-14645/index.html","3b9eb96f5768423fc9be8a3df8a6b1e7"],["/tags/CVE-2020-1938/index.html","ae9bd00ecdf12745d44a6d37c1b6cf1a"],["/tags/CVE-2020-2883/index.html","4fef3817311a449d5c98d52e1a0a904b"],["/tags/F5/index.html","8d51557a92584bd6991264b4b08d3e62"],["/tags/HW/index.html","edefb47f452823fade681ccbd58cd2f0"],["/tags/IIS/index.html","87e3a8ef2f2bc7bf20ac2bcf42d2de2e"],["/tags/JNDI/index.html","b0f9a013784f33e6a9e935dab8613723"],["/tags/MOVE/index.html","9cecd26cdc6d977da4f8ea6bdd32f3f6"],["/tags/POC/index.html","83134c72453a39c57b1c2896efcc5e2d"],["/tags/PUT/index.html","6b4b99d2a9becfc40f269d6346a3add7"],["/tags/PhpStudy2018/index.html","6bacceb2d187d5ca0db7cf53cbaa406e"],["/tags/RCE/index.html","67c2571e6721942328ccdab464a3183c"],["/tags/SMB/index.html","dd97cc0ab760a2cf5c57c98c72403a33"],["/tags/ThinkPHP-5/index.html","7e7ecba20b82e12e602ab1033a3cbea9"],["/tags/ThinkPHP/index.html","b1e779feee83855a4eb5d889f011a627"],["/tags/Tomcat/index.html","489ea64d394253c2087a5eec9ea9a2ba"],["/tags/Vulfocus/index.html","9f0f3db1703ce44986df50ef1a7ab130"],["/tags/XSS/index.html","81c7d7f3e9e18917e486811ea00ded34"],["/tags/index.html","76fc4e79bacbc89d377695d710d9c3b4"],["/tags/object-Object/index.html","8741e2252ab50e3dbc879dc5a7f88310"],["/tags/vulnstack/index.html","ce3a357e2c1f197baaa87c3f88b1b146"],["/tags/weblogic/index.html","48b802e229fd15c4c5ec58674992e7f2"],["/tags/zentao/index.html","7ba4ec3f8d629ca84fb98c04204bc568"],["/tags/信息安全性/index.html","081ded2e4fe86d9aa328ca62b3aaacc0"],["/tags/内网渗透/index.html","38b10de5058359bce5b637e6be316a43"],["/tags/后门/index.html","39404a3833be46fc0f0d7eac3a23563e"],["/tags/域/index.html","0dc11d7379671bd2f0fda279eb6191ca"],["/tags/域渗透/index.html","c8d57df4c081ab533d2604ed44a862e1"],["/tags/弹药库/index.html","6a739905241d605edbd6f9423120117c"],["/tags/攻防/index.html","3bf72537fe8c0abb8e63961104dda2d6"],["/tags/文件包含/index.html","7ee9b1a2416bb03b61c478b36b0d89e2"],["/tags/模板/index.html","eafb73d8e1950191b60e76658e503922"],["/tags/漏洞/index.html","22b7a79fbfbc78efb8509021668ad18a"],["/tags/漏洞/page/2/index.html","e070255417cccd3bd8e1dce34e51c7fd"],["/tags/漏洞复现/index.html","ca261459653a05fd84e27e7944bf79e0"],["/tags/漏洞复现Phpstudy介绍/index.html","11f839438e172776023152ed729c5ac7"],["/tags/漏洞检测/index.html","4a912adf11f9e6dbaa8d47479ea8eb02"],["/tags/禅道/index.html","ee5ab5d46530d2f45bbdd5a7df29f7db"],["/tags/红队/index.html","3da938e4be5a14ab044dc8486d3dba11"],["/tags/红队评估/index.html","a7b81e876842d3d55b932c49e1ec970c"],["/tags/表单验证/index.html","085e66109b3a22449456f77a902d3dff"],["/tags/跨站脚本/index.html","26e12420545416377c18da5700f5783b"],["/tags/软件测评/index.html","f9e9d39a7b42b04e5a926615eb5d570c"],["/tags/过程文档/index.html","a3d71ac9b341b5209c8070ba37ee6d7f"],["/tags/通用软件测评/index.html","4a5909af48d61db410fe10ee488f3ad4"],["/tags/通达OA11-6/index.html","df7d50fbbe978cf0ca30b3688ec369a8"],["/welcome-image.jpg","bf1c222b158e37497fed9cf683571221"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://chaceshadow.github.io"});



