(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"+D0c":function(e,n){e.exports="/webgpu-samples/_next/static/fee692aa63e7fca506f31d6bd472c045.webm"},"3Fq/":function(e,n,t){"use strict";n.a="[[group(0), binding(1)]] var mySampler: sampler;\n[[group(0), binding(2)]] var myTexture: texture_external;\n\n[[stage(fragment)]]\nfn main([[location(0)]] fragUV : vec2<f32>) -> [[location(0)]] vec4<f32> {\n  return textureSampleLevel(myTexture, mySampler, fragUV);\n}\n"},B9fm:function(e,n,t){"use strict";n.a="[[group(0), binding(0)]] var mySampler : sampler;\n[[group(0), binding(1)]] var myTexture : texture_2d<f32>;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragUV : vec2<f32>;\n};\n\n[[stage(vertex)]]\nfn vert_main([[builtin(vertex_index)]] VertexIndex : u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 6>(\n      vec2<f32>( 1.0,  1.0),\n      vec2<f32>( 1.0, -1.0),\n      vec2<f32>(-1.0, -1.0),\n      vec2<f32>( 1.0,  1.0),\n      vec2<f32>(-1.0, -1.0),\n      vec2<f32>(-1.0,  1.0));\n\n  var uv = array<vec2<f32>, 6>(\n      vec2<f32>(1.0, 0.0),\n      vec2<f32>(1.0, 1.0),\n      vec2<f32>(0.0, 1.0),\n      vec2<f32>(1.0, 0.0),\n      vec2<f32>(0.0, 1.0),\n      vec2<f32>(0.0, 0.0));\n\n  var output : VertexOutput;\n  output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n  output.fragUV = uv[VertexIndex];\n  return output;\n}\n\n[[stage(fragment)]]\nfn frag_main([[location(0)]] fragUV : vec2<f32>) -> [[location(0)]] vec4<f32> {\n  return textureSample(myTexture, mySampler, fragUV);\n}\n"},Q4X6:function(e,n,t){"use strict";t.r(n),function(e,r){var a=t("o0o1"),i=t.n(a),o=t("HaE+"),s=t("8i9l"),c=t("B9fm"),u=t("3Fq/"),d=function(){var e=Object(o.a)(i.a.mark((function e(n){var r,a,o,s,d,l,m,p,f,v,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(){if(r.current){var e=s.createBindGroup({layout:f.getBindGroupLayout(0),entries:[{binding:1,resource:v},{binding:2,resource:s.importExternalTexture({source:a})}]}),n=s.createCommandEncoder(),t={colorAttachments:[{view:d.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]},i=n.beginRenderPass(t);i.setPipeline(f),i.setBindGroup(0,e),i.draw(6,1,0,0),i.endPass(),s.queue.submit([n.finish()]),requestAnimationFrame(g)}},r=n.canvasRef,(a=document.createElement("video")).loop=!0,a.autoplay=!0,a.muted=!0,a.src=t("+D0c"),e.next=9,a.play();case 9:return e.next=11,navigator.gpu.requestAdapter();case 11:return o=e.sent,e.next=14,o.requestDevice();case 14:if(s=e.sent,null!==r.current){e.next=17;break}return e.abrupt("return");case 17:d=r.current.getContext("webgpu"),l=window.devicePixelRatio||1,m=[r.current.clientWidth*l,r.current.clientHeight*l],p=d.getPreferredFormat(o),d.configure({device:s,format:p,size:m}),f=s.createRenderPipeline({vertex:{module:s.createShaderModule({code:c.a}),entryPoint:"vert_main"},fragment:{module:s.createShaderModule({code:u.a}),entryPoint:"main",targets:[{format:p}]},primitive:{topology:"triangle-list"}}),v=s.createSampler({magFilter:"linear",minFilter:"linear"}),requestAnimationFrame(g);case 25:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return Object(s.a)({name:"Video Uploading",description:"This example shows how to upload video frame to WebGPU.",init:d,sources:[{name:e.substr(r.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport fullscreenTexturedQuadWGSL from '../../shaders/fullscreenTexturedQuad.wgsl';\nimport sampleExternalTextureWGSL from '../../shaders/sampleExternalTexture.frag.wgsl';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  // Set video element\n  const video = document.createElement('video');\n  video.loop = true;\n  video.autoplay = true;\n  video.muted = true;\n  video.src = require('../../../assets/video/pano.webm');\n  await video.play();\n\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n\n  const context = canvasRef.current.getContext('webgpu');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: fullscreenTexturedQuadWGSL,\n      }),\n      entryPoint: 'vert_main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: sampleExternalTextureWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    const uniformBindGroup = device.createBindGroup({\n      layout: pipeline.getBindGroupLayout(0),\n      entries: [\n        {\n          binding: 1,\n          resource: sampler,\n        },\n        {\n          binding: 2,\n          resource: device.importExternalTexture({\n            source: video,\n          }),\n        },\n      ],\n    });\n\n    const commandEncoder = device.createCommandEncoder();\n    const textureView = context.getCurrentTexture().createView();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: textureView,\n          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.draw(6, 1, 0, 0);\n    passEncoder.endPass();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst VideoUploading: () => JSX.Element = () =>\n  makeSample({\n    name: 'Video Uploading',\n    description: 'This example shows how to upload video frame to WebGPU.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/fullscreenTexturedQuad.wgsl',\n        contents: fullscreenTexturedQuadWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/sampleExternalTexture.wgsl',\n        contents: sampleExternalTextureWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default VideoUploading;\n"},{name:"../../shaders/fullscreenTexturedQuad.wgsl",contents:c.a,editable:!0},{name:"../../shaders/sampleExternalTexture.wgsl",contents:u.a,editable:!0}],filename:e})}}.call(this,"src/sample/videoUploading/main.ts","src/sample/videoUploading")}}]);