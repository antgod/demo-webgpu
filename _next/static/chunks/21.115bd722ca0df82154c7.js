(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{OI48:function(e,n,t){"use strict";n.a="[[stage(fragment)]]\nfn main() -> [[location(0)]] vec4<f32> {\n  return vec4<f32>(1.0, 0.0, 0.0, 1.0);\n}"},aPgm:function(e,n,t){"use strict";t.r(n),function(e,r){var a=t("o0o1"),i=t.n(a),o=t("HaE+"),s=t("8i9l"),c=t("nBne"),l=t("OI48"),d=function(){var e=Object(o.a)(i.a.mark((function e(n){var t,r,a,o,s,d,u,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=function(){if(t.current){var e=a.createCommandEncoder(),n={colorAttachments:[{view:o.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]},r=e.beginRenderPass(n);r.setPipeline(m),r.draw(3,1,0,0),r.endPass(),a.queue.submit([e.finish()]),requestAnimationFrame(p)}},t=n.canvasRef,e.next=4,navigator.gpu.requestAdapter();case 4:return r=e.sent,e.next=7,r.requestDevice();case 7:if(a=e.sent,null!==t.current){e.next=10;break}return e.abrupt("return");case 10:o=t.current.getContext("webgpu"),s=window.devicePixelRatio||1,d=[t.current.clientWidth*s,t.current.clientHeight*s],u=o.getPreferredFormat(r),o.configure({device:a,format:u,size:d}),m=a.createRenderPipeline({vertex:{module:a.createShaderModule({code:c.a}),entryPoint:"main"},fragment:{module:a.createShaderModule({code:l.a}),entryPoint:"main",targets:[{format:u}]},primitive:{topology:"triangle-list"}}),requestAnimationFrame(p);case 17:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return Object(s.a)({name:"Hello Triangle",description:"Shows rendering a basic triangle.",init:d,sources:[{name:e.substr(r.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('webgpu');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    const commandEncoder = device.createCommandEncoder();\n    const textureView = context.getCurrentTexture().createView();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: textureView,\n          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.endPass();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst HelloTriangle: () => JSX.Element = () =>\n  makeSample({\n    name: 'Hello Triangle',\n    description: 'Shows rendering a basic triangle.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default HelloTriangle;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:c.a,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:l.a,editable:!0}],filename:e})}}.call(this,"src/sample/helloTriangle/main.ts","src/sample/helloTriangle")},nBne:function(e,n,t){"use strict";n.a="[[stage(vertex)]]\nfn main([[builtin(vertex_index)]] VertexIndex : u32)\n     -> [[builtin(position)]] vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n      vec2<f32>(0.0, 0.5),\n      vec2<f32>(-0.5, -0.5),\n      vec2<f32>(0.5, -0.5));\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}}]);