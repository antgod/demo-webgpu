(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{MTJ4:function(e,n,t){"use strict";t.r(n),function(e,r){t.d(n,"geometryVertexArray",(function(){return B}));var a,o,i=t("o0o1"),s=t.n(i),u=t("HaE+"),d=t("rePB"),c=t("8i9l"),p=t("IOcx"),f=t("YLbJ"),l=t("ayAE"),m=t("aze8"),h=t("bxpb"),P=t("oROU"),v=t("VBXA"),g=t("NTEr");function x(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var y,w=1e-4,B=new Float32Array([-1.5,-1,w,1,1,0,0,1,.5,-1,w,1,1,0,0,1,-1.5,1,w,1,1,0,0,1,.5,-1,w,1,1,0,0,1,.5,1,w,1,1,0,0,1,-1.5,1,w,1,1,0,0,1,-.5,-1,-w,1,0,1,0,1,1.5,-1,-w,1,0,1,0,1,-.5,1,-w,1,0,1,0,1,1.5,-1,-w,1,0,1,0,1,1.5,1,-w,1,0,1,0,1,-.5,1,-w,1,0,1,0,1]),S=p.a.create();function R(e,n,t,r,a){var o=1/Math.tan(n/2);if(e[0]=o/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=a&&a!==1/0){var i=1/(r-a);e[10]=a*i,e[14]=a*r*i}else e[10]=-1,e[14]=-r;return e}S[10]=-1,S[14]=1,function(e){e[e.Default=0]="Default",e[e.Reversed=1]="Reversed"}(y||(y={}));var D=[y.Default,y.Reversed],M=(a={},Object(d.a)(a,y.Default,"less"),Object(d.a)(a,y.Reversed,"greater"),a),G=(o={},Object(d.a)(o,y.Default,1),Object(d.a)(o,y.Reversed,0),o),L=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,r,a,o,i,u,d,c,b,w,L,V,T,C,U,A,E,O,z,F,I,_,j,Q,W,q,N,k,X,H,Y,Z,J,$,K,ee,ne,te,re,ae,oe,ie,se,ue,de,ce,pe,fe,le,me,he,Pe;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Pe=function(){if(t.current){me(),o.queue.writeBuffer(Z,0,ne.buffer,ne.byteOffset,ne.byteLength);var e=i.getCurrentTexture().createView(),n=o.createCommandEncoder();if("color"===he.mode){var r,a=x(D);try{for(a.s();!(r=a.n()).done;){var s=r.value;X[s].colorAttachments[0].view=e,X[s].depthStencilAttachment.depthLoadValue=G[s];var u=n.beginRenderPass(X[s]);u.setPipeline(I[s]),u.setBindGroup(0,K[s]),u.setVertexBuffer(0,b),u.setViewport(d[0]*s/2,0,d[0]/2,d[1],0,1),u.draw(12,5,0,0),u.endPass()}}catch(w){a.e(w)}finally{a.f()}}else if("precision-error"===he.mode){var c,p=x(D);try{for(p.s();!(c=p.n()).done;){var f=c.value;k.depthStencilAttachment.depthLoadValue=G[f];var l=n.beginRenderPass(k);l.setPipeline(U[f]),l.setBindGroup(0,K[f]),l.setVertexBuffer(0,b),l.setViewport(d[0]*f/2,0,d[0]/2,d[1],0,1),l.draw(12,5,0,0),l.endPass(),X[f].colorAttachments[0].view=e,X[f].depthStencilAttachment.depthLoadValue=G[f];var m=n.beginRenderPass(X[f]);m.setPipeline(O[f]),m.setBindGroup(0,K[f]),m.setBindGroup(1,Y),m.setVertexBuffer(0,b),m.setViewport(d[0]*f/2,0,d[0]/2,d[1],0,1),m.draw(12,5,0,0),m.endPass()}}catch(w){p.e(w)}finally{p.f()}}else{var h,P=x(D);try{for(P.s();!(h=P.n()).done;){var v=h.value;k.depthStencilAttachment.depthLoadValue=G[v];var g=n.beginRenderPass(k);g.setPipeline(U[v]),g.setBindGroup(0,K[v]),g.setVertexBuffer(0,b),g.setViewport(d[0]*v/2,0,d[0]/2,d[1],0,1),g.draw(12,5,0,0),g.endPass(),H[v].colorAttachments[0].view=e;var y=n.beginRenderPass(H[v]);y.setPipeline(j),y.setBindGroup(0,Y),y.setViewport(d[0]*v/2,0,d[0]/2,d[1],0,1),y.draw(6,1,0,0),y.endPass()}}catch(w){P.e(w)}finally{P.f()}}o.queue.submit([n.finish()]),requestAnimationFrame(Pe)}},me=function(){for(var e=Date.now()/1e3,n=0,t=0;n<5;n++,t+=16)p.a.rotate(le,ee[n],Math.PI/180*30,p.b.fromValues(Math.sin(e),Math.cos(e),0)),ne.set(le,t)},t=n.canvasRef,r=n.gui,e.next=5,navigator.gpu.requestAdapter();case 5:return a=e.sent,e.next=8,a.requestDevice();case 8:if(o=e.sent,null!==t.current){e.next=11;break}return e.abrupt("return");case 11:for(i=t.current.getContext("webgpu"),u=window.devicePixelRatio||1,d=[t.current.clientWidth*u,t.current.clientHeight*u],c=i.getPreferredFormat(a),i.configure({device:o,format:c,size:d}),b=o.createBuffer({size:B.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(b.getMappedRange()).set(B),b.unmap(),w="depth32float",L=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}}]}),V=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),T=o.createPipelineLayout({bindGroupLayouts:[V]}),C={layout:T,vertex:{module:o.createShaderModule({code:m.a}),entryPoint:"main",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x4"}]}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:w}},U=[],C.depthStencil.depthCompare=M[y.Default],U[y.Default]=o.createRenderPipeline(C),C.depthStencil.depthCompare=M[y.Reversed],U[y.Reversed]=o.createRenderPipeline(C),A=o.createPipelineLayout({bindGroupLayouts:[V,L]}),E={layout:A,vertex:{module:o.createShaderModule({code:v.a}),entryPoint:"main",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x4"}]}]},fragment:{module:o.createShaderModule({code:g.a}),entryPoint:"main",targets:[{format:c}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:w}},O=[],E.depthStencil.depthCompare=M[y.Default],O[y.Default]=o.createRenderPipeline(E),E.depthStencil.depthCompare=M[y.Reversed],O[y.Reversed]=o.createRenderPipeline(E),z=o.createPipelineLayout({bindGroupLayouts:[V]}),F={layout:z,vertex:{module:o.createShaderModule({code:f.a}),entryPoint:"main",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}]}]},fragment:{module:o.createShaderModule({code:l.a}),entryPoint:"main",targets:[{format:c}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:w}},I=[],F.depthStencil.depthCompare=M[y.Default],I[y.Default]=o.createRenderPipeline(F),F.depthStencil.depthCompare=M[y.Reversed],I[y.Reversed]=o.createRenderPipeline(F),_=o.createPipelineLayout({bindGroupLayouts:[L]}),j=o.createRenderPipeline({layout:_,vertex:{module:o.createShaderModule({code:h.a}),entryPoint:"main"},fragment:{module:o.createShaderModule({code:P.a}),entryPoint:"main",targets:[{format:c}]},primitive:{topology:"triangle-list"}}),Q=o.createTexture({size:d,format:w,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),W=Q.createView(),q=o.createTexture({size:d,format:w,usage:GPUTextureUsage.RENDER_ATTACHMENT}),N=q.createView(),k={colorAttachments:[],depthStencilAttachment:{view:W,depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},X=[{colorAttachments:[{view:void 0,loadValue:{r:0,g:0,b:.5,a:1},storeOp:"store"}],depthStencilAttachment:{view:N,depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},{colorAttachments:[{view:void 0,loadValue:"load",storeOp:"store"}],depthStencilAttachment:{view:N,depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}}],H=[{colorAttachments:[{view:void 0,loadValue:{r:0,g:0,b:.5,a:1},storeOp:"store"}]},{colorAttachments:[{view:void 0,loadValue:"load",storeOp:"store"}]}],Y=o.createBindGroup({layout:L,entries:[{binding:0,resource:W}]}),320,Z=o.createBuffer({size:320,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),J=o.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),$=o.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),K=[o.createBindGroup({layout:V,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:J}}]}),o.createBindGroup({layout:V,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:$}}]})],ee=new Array(5),ne=new Float32Array(80),te=0,re=0;re<1;re++)for(ae=0;ae<5;ae++)oe=-800*te,ie=1+50*te,ee[te]=p.a.create(),p.a.translate(ee[te],ee[te],p.b.fromValues(re-.5+.5,(4-.2*oe)*(ae-2.5+1),oe)),p.a.scale(ee[te],ee[te],p.b.fromValues(ie,ie,ie)),te++;se=p.a.create(),p.a.translate(se,se,p.b.fromValues(0,0,-12)),ue=.5*d[0]/d[1],R(de=p.a.create(),2*Math.PI/5,ue,5,1/0),ce=p.a.create(),p.a.multiply(ce,de,se),pe=p.a.create(),p.a.multiply(pe,S,ce),fe=ce,o.queue.writeBuffer(J,0,fe.buffer,fe.byteOffset,fe.byteLength),fe=pe,o.queue.writeBuffer($,0,fe.buffer,fe.byteOffset,fe.byteLength),le=p.a.create(),he={mode:"color"},r.add(he,"mode",["color","precision-error","depth-texture"]),requestAnimationFrame(Pe);case 83:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return Object(c.a)({name:"Reversed Z",description:"This example shows the use of reversed z technique for better utilization of depth buffer precision.\n      The left column uses regular method, while the right one uses reversed z technique.\n      Both are using depth32float as their depth buffer format. A set of red and green planes are positioned very close to each other.\n      Higher sets are placed further from camera (and are scaled for better visual purpose).\n      To use reversed z to render your scene, you will need depth store value to be 0.0, depth compare function to be greater,\n      and remap depth range by multiplying an additional matrix to your projection matrix.\n      Related reading:\n      https://developer.nvidia.com/content/depth-precision-visualized\n      https://thxforthefish.com/posts/reverse_z/\n      ",gui:!0,init:L,sources:[{name:e.substr(r.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\nimport { mat4, vec3 } from 'gl-matrix';\n\nimport vertexWGSL from './vertex.wgsl';\nimport fragmentWGSL from './fragment.wgsl';\nimport vertexDepthPrePassWGSL from './vertexDepthPrePass.wgsl';\nimport vertexTextureQuadWGSL from './vertexTextureQuad.wgsl';\nimport fragmentTextureQuadWGSL from './fragmentTextureQuad.wgsl';\nimport vertexPrecisionErrorPassWGSL from './vertexPrecisionErrorPass.wgsl';\nimport fragmentPrecisionErrorPassWGSL from './fragmentPrecisionErrorPass.wgsl';\n\n// Two planes close to each other for depth precision test\nconst geometryVertexSize = 4 * 8; // Byte size of one geometry vertex.\nconst geometryPositionOffset = 0;\nconst geometryColorOffset = 4 * 4; // Byte offset of geometry vertex color attribute.\nconst geometryDrawCount = 6 * 2;\n\nconst d = 0.0001; // half distance between two planes\nconst o = 0.5; // half x offset to shift planes so they are only partially overlaping\n\n// prettier-ignore\nexport const geometryVertexArray = new Float32Array([\n  // float4 position, float4 color\n  -1 - o, -1, d, 1, 1, 0, 0, 1,\n   1 - o, -1, d, 1,  1, 0, 0, 1,\n  -1 - o, 1, d, 1,  1, 0, 0, 1,\n   1 - o, -1,  d, 1, 1, 0, 0, 1,\n   1 - o, 1,  d, 1,  1, 0, 0, 1,\n  -1 - o, 1, d, 1,  1, 0, 0, 1,\n\n  -1 + o, -1, -d, 1, 0, 1, 0, 1,\n   1 + o, -1, -d, 1,  0, 1, 0, 1,\n  -1 + o, 1, -d, 1,  0, 1, 0, 1,\n   1 + o, -1,  -d, 1, 0, 1, 0, 1,\n   1 + o, 1,  -d, 1,  0, 1, 0, 1,\n  -1 + o, 1, -d, 1,  0, 1, 0, 1,\n]);\n\nconst xCount = 1;\nconst yCount = 5;\nconst numInstances = xCount * yCount;\nconst matrixFloatCount = 16; // 4x4 matrix\nconst matrixStride = 4 * matrixFloatCount; // 64;\n\nconst depthRangeRemapMatrix = mat4.create();\ndepthRangeRemapMatrix[10] = -1;\ndepthRangeRemapMatrix[14] = 1;\n\n// https://github.com/toji/gl-matrix/commit/e906eb7bb02822a81b1d197c6b5b33563c0403c0\nfunction perspectiveZO(out, fovy, aspect, near, far) {\n  const f = 1.0 / Math.tan(fovy / 2);\n  out[0] = f / aspect;\n  out[1] = 0;\n  out[2] = 0;\n  out[3] = 0;\n  out[4] = 0;\n  out[5] = f;\n  out[6] = 0;\n  out[7] = 0;\n  out[8] = 0;\n  out[9] = 0;\n  out[11] = -1;\n  out[12] = 0;\n  out[13] = 0;\n  out[15] = 0;\n  if (far != null && far !== Infinity) {\n    const nf = 1 / (near - far);\n    out[10] = far * nf;\n    out[14] = far * near * nf;\n  } else {\n    out[10] = -1;\n    out[14] = -near;\n  }\n  return out;\n}\n\nenum DepthBufferMode {\n  Default = 0,\n  Reversed,\n}\n\nconst depthBufferModes: DepthBufferMode[] = [\n  DepthBufferMode.Default,\n  DepthBufferMode.Reversed,\n];\nconst depthCompareFuncs = {\n  [DepthBufferMode.Default]: 'less' as GPUCompareFunction,\n  [DepthBufferMode.Reversed]: 'greater' as GPUCompareFunction,\n};\nconst depthLoadValues = {\n  [DepthBufferMode.Default]: 1.0,\n  [DepthBufferMode.Reversed]: 0.0,\n};\n\nconst init: SampleInit = async ({ canvasRef, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n\n  const context = canvasRef.current.getContext('webgpu');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: geometryVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(geometryVertexArray);\n  verticesBuffer.unmap();\n\n  const depthBufferFormat = 'depth32float';\n\n  const depthTextureBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'depth',\n        },\n      },\n    ],\n  });\n\n  // Model, view, projection matrices\n  const uniformBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n    ],\n  });\n\n  const depthPrePassRenderPipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [uniformBindGroupLayout],\n  });\n\n  // depthPrePass is used to render scene to the depth texture\n  // this is not needed if you just want to use reversed z to render a scene\n  const depthPrePassRenderPipelineDescriptorBase: GPURenderPipelineDescriptor = {\n    layout: depthPrePassRenderPipelineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexDepthPrePassWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: geometryVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: geometryPositionOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: depthBufferFormat,\n    },\n  };\n  // we need the depthCompare to fit the depth buffer mode we are using.\n  // this is the same for other passes\n  const depthPrePassPipelines: GPURenderPipeline[] = [];\n  depthPrePassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Default];\n  depthPrePassPipelines[DepthBufferMode.Default] = device.createRenderPipeline(\n    depthPrePassRenderPipelineDescriptorBase\n  );\n  depthPrePassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Reversed];\n  depthPrePassPipelines[DepthBufferMode.Reversed] = device.createRenderPipeline(\n    depthPrePassRenderPipelineDescriptorBase\n  );\n\n  // precisionPass is to draw precision error as color of depth value stored in depth buffer\n  // compared to that directly calcualated in the shader\n  const precisionPassRenderPipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [uniformBindGroupLayout, depthTextureBindGroupLayout],\n  });\n  const precisionPassRenderPipelineDescriptorBase: GPURenderPipelineDescriptor = {\n    layout: precisionPassRenderPipelineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexPrecisionErrorPassWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: geometryVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: geometryPositionOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentPrecisionErrorPassWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: depthBufferFormat,\n    },\n  };\n  const precisionPassPipelines: GPURenderPipeline[] = [];\n  precisionPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Default];\n  precisionPassPipelines[DepthBufferMode.Default] = device.createRenderPipeline(\n    precisionPassRenderPipelineDescriptorBase\n  );\n  precisionPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Reversed];\n  precisionPassPipelines[\n    DepthBufferMode.Reversed\n  ] = device.createRenderPipeline(precisionPassRenderPipelineDescriptorBase);\n\n  // colorPass is the regular render pass to render the scene\n  const colorPassRenderPiplineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [uniformBindGroupLayout],\n  });\n  const colorPassRenderPipelineDescriptorBase: GPURenderPipelineDescriptor = {\n    layout: colorPassRenderPiplineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: geometryVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: geometryPositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: geometryColorOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: depthBufferFormat,\n    },\n  };\n  const colorPassPipelines: GPURenderPipeline[] = [];\n  colorPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Default];\n  colorPassPipelines[DepthBufferMode.Default] = device.createRenderPipeline(\n    colorPassRenderPipelineDescriptorBase\n  );\n  colorPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Reversed];\n  colorPassPipelines[DepthBufferMode.Reversed] = device.createRenderPipeline(\n    colorPassRenderPipelineDescriptorBase\n  );\n\n  // textureQuadPass is draw a full screen quad of depth texture\n  // to see the difference of depth value using reversed z compared to default depth buffer usage\n  // 0.0 will be the furthest and 1.0 will be the closest\n  const textureQuadPassPiplineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [depthTextureBindGroupLayout],\n  });\n  const textureQuadPassPipline = device.createRenderPipeline({\n    layout: textureQuadPassPiplineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexTextureQuadWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentTextureQuadWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: presentationSize,\n    format: depthBufferFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,\n  });\n  const depthTextureView = depthTexture.createView();\n\n  const defaultDepthTexture = device.createTexture({\n    size: presentationSize,\n    format: depthBufferFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n  const defaultDepthTextureView = defaultDepthTexture.createView();\n\n  const depthPrePassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [],\n    depthStencilAttachment: {\n      view: depthTextureView,\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  // drawPassDescriptor and drawPassLoadDescriptor are used for drawing\n  // the scene twice using different depth buffer mode on splitted viewport\n  // of the same canvas\n  // see the difference of the loadValue of the colorAttachments\n  const drawPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        loadValue: { r: 0.0, g: 0.0, b: 0.5, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: defaultDepthTextureView,\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0.0,\n      stencilStoreOp: 'store',\n    },\n  };\n  const drawPassLoadDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // attachment is acquired and set in render loop.\n        view: undefined,\n\n        loadValue: 'load',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: defaultDepthTextureView,\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0.0,\n      stencilStoreOp: 'store',\n    },\n  };\n  const drawPassDescriptors = [drawPassDescriptor, drawPassLoadDescriptor];\n\n  const textureQuadPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        loadValue: { r: 0.0, g: 0.0, b: 0.5, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n  };\n  const textureQuadPassLoadDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        loadValue: 'load',\n        storeOp: 'store',\n      },\n    ],\n  };\n  const textureQuadPassDescriptors = [\n    textureQuadPassDescriptor,\n    textureQuadPassLoadDescriptor,\n  ];\n\n  const depthTextureBindGroup = device.createBindGroup({\n    layout: depthTextureBindGroupLayout,\n    entries: [\n      {\n        binding: 0,\n        resource: depthTextureView,\n      },\n    ],\n  });\n\n  const uniformBufferSize = numInstances * matrixStride;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n  const cameraMatrixBuffer = device.createBuffer({\n    size: 4 * 16, // 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n  const cameraMatrixReversedDepthBuffer = device.createBuffer({\n    size: 4 * 16, // 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroups = [\n    device.createBindGroup({\n      layout: uniformBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n          },\n        },\n        {\n          binding: 1,\n          resource: {\n            buffer: cameraMatrixBuffer,\n          },\n        },\n      ],\n    }),\n    device.createBindGroup({\n      layout: uniformBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n          },\n        },\n        {\n          binding: 1,\n          resource: {\n            buffer: cameraMatrixReversedDepthBuffer,\n          },\n        },\n      ],\n    }),\n  ];\n\n  const modelMatrices = new Array(numInstances);\n  const mvpMatricesData = new Float32Array(matrixFloatCount * numInstances);\n\n  let m = 0;\n  for (let x = 0; x < xCount; x++) {\n    for (let y = 0; y < yCount; y++) {\n      const z = -800 * m;\n      const s = 1 + 50 * m;\n\n      modelMatrices[m] = mat4.create();\n\n      mat4.translate(\n        modelMatrices[m],\n        modelMatrices[m],\n        vec3.fromValues(\n          x - xCount / 2 + 0.5,\n          (4.0 - 0.2 * z) * (y - yCount / 2 + 1.0),\n          z\n        )\n      );\n      mat4.scale(modelMatrices[m], modelMatrices[m], vec3.fromValues(s, s, s));\n\n      m++;\n    }\n  }\n\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -12));\n\n  const aspect = (0.5 * presentationSize[0]) / presentationSize[1];\n  const projectionMatrix = mat4.create();\n  perspectiveZO(projectionMatrix, (2 * Math.PI) / 5, aspect, 5, Infinity);\n\n  const viewProjectionMatrix = mat4.create();\n  mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);\n  const reversedRangeViewProjectionMatrix = mat4.create();\n  // to use 1/z we just multiple depthRangeRemapMatrix to our default camera view projection matrix\n  mat4.multiply(\n    reversedRangeViewProjectionMatrix,\n    depthRangeRemapMatrix,\n    viewProjectionMatrix\n  );\n\n  let bufferData = viewProjectionMatrix as Float32Array;\n  device.queue.writeBuffer(\n    cameraMatrixBuffer,\n    0,\n    bufferData.buffer,\n    bufferData.byteOffset,\n    bufferData.byteLength\n  );\n  bufferData = reversedRangeViewProjectionMatrix as Float32Array;\n  device.queue.writeBuffer(\n    cameraMatrixReversedDepthBuffer,\n    0,\n    bufferData.buffer,\n    bufferData.byteOffset,\n    bufferData.byteLength\n  );\n\n  const tmpMat4 = mat4.create();\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    for (let i = 0, m = 0; i < numInstances; i++, m += matrixFloatCount) {\n      mat4.rotate(\n        tmpMat4,\n        modelMatrices[i],\n        (Math.PI / 180) * 30,\n        vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n      );\n      mvpMatricesData.set(tmpMat4, m);\n    }\n  }\n\n  const settings = {\n    mode: 'color',\n  };\n  gui.add(settings, 'mode', ['color', 'precision-error', 'depth-texture']);\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      mvpMatricesData.buffer,\n      mvpMatricesData.byteOffset,\n      mvpMatricesData.byteLength\n    );\n\n    const attachment = context.getCurrentTexture().createView();\n    const commandEncoder = device.createCommandEncoder();\n    if (settings.mode === 'color') {\n      for (const m of depthBufferModes) {\n        drawPassDescriptors[m].colorAttachments[0].view = attachment;\n        drawPassDescriptors[m].depthStencilAttachment.depthLoadValue =\n          depthLoadValues[m];\n        const colorPass = commandEncoder.beginRenderPass(\n          drawPassDescriptors[m]\n        );\n        colorPass.setPipeline(colorPassPipelines[m]);\n        colorPass.setBindGroup(0, uniformBindGroups[m]);\n        colorPass.setVertexBuffer(0, verticesBuffer);\n        colorPass.setViewport(\n          (presentationSize[0] * m) / 2,\n          0,\n          presentationSize[0] / 2,\n          presentationSize[1],\n          0,\n          1\n        );\n        colorPass.draw(geometryDrawCount, numInstances, 0, 0);\n        colorPass.endPass();\n      }\n    } else if (settings.mode === 'precision-error') {\n      for (const m of depthBufferModes) {\n        {\n          depthPrePassDescriptor.depthStencilAttachment.depthLoadValue =\n            depthLoadValues[m];\n          const depthPrePass = commandEncoder.beginRenderPass(\n            depthPrePassDescriptor\n          );\n          depthPrePass.setPipeline(depthPrePassPipelines[m]);\n          depthPrePass.setBindGroup(0, uniformBindGroups[m]);\n          depthPrePass.setVertexBuffer(0, verticesBuffer);\n          depthPrePass.setViewport(\n            (presentationSize[0] * m) / 2,\n            0,\n            presentationSize[0] / 2,\n            presentationSize[1],\n            0,\n            1\n          );\n          depthPrePass.draw(geometryDrawCount, numInstances, 0, 0);\n          depthPrePass.endPass();\n        }\n        {\n          drawPassDescriptors[m].colorAttachments[0].view = attachment;\n          drawPassDescriptors[m].depthStencilAttachment.depthLoadValue =\n            depthLoadValues[m];\n          const precisionErrorPass = commandEncoder.beginRenderPass(\n            drawPassDescriptors[m]\n          );\n          precisionErrorPass.setPipeline(precisionPassPipelines[m]);\n          precisionErrorPass.setBindGroup(0, uniformBindGroups[m]);\n          precisionErrorPass.setBindGroup(1, depthTextureBindGroup);\n          precisionErrorPass.setVertexBuffer(0, verticesBuffer);\n          precisionErrorPass.setViewport(\n            (presentationSize[0] * m) / 2,\n            0,\n            presentationSize[0] / 2,\n            presentationSize[1],\n            0,\n            1\n          );\n          precisionErrorPass.draw(geometryDrawCount, numInstances, 0, 0);\n          precisionErrorPass.endPass();\n        }\n      }\n    } else {\n      // depth texture quad\n      for (const m of depthBufferModes) {\n        {\n          depthPrePassDescriptor.depthStencilAttachment.depthLoadValue =\n            depthLoadValues[m];\n          const depthPrePass = commandEncoder.beginRenderPass(\n            depthPrePassDescriptor\n          );\n          depthPrePass.setPipeline(depthPrePassPipelines[m]);\n          depthPrePass.setBindGroup(0, uniformBindGroups[m]);\n          depthPrePass.setVertexBuffer(0, verticesBuffer);\n          depthPrePass.setViewport(\n            (presentationSize[0] * m) / 2,\n            0,\n            presentationSize[0] / 2,\n            presentationSize[1],\n            0,\n            1\n          );\n          depthPrePass.draw(geometryDrawCount, numInstances, 0, 0);\n          depthPrePass.endPass();\n        }\n        {\n          textureQuadPassDescriptors[m].colorAttachments[0].view = attachment;\n          const depthTextureQuadPass = commandEncoder.beginRenderPass(\n            textureQuadPassDescriptors[m]\n          );\n          depthTextureQuadPass.setPipeline(textureQuadPassPipline);\n          depthTextureQuadPass.setBindGroup(0, depthTextureBindGroup);\n          depthTextureQuadPass.setViewport(\n            (presentationSize[0] * m) / 2,\n            0,\n            presentationSize[0] / 2,\n            presentationSize[1],\n            0,\n            1\n          );\n          depthTextureQuadPass.draw(6, 1, 0, 0);\n          depthTextureQuadPass.endPass();\n        }\n      }\n    }\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst ReversedZ: () => JSX.Element = () =>\n  makeSample({\n    name: 'Reversed Z',\n    description: `This example shows the use of reversed z technique for better utilization of depth buffer precision.\n      The left column uses regular method, while the right one uses reversed z technique.\n      Both are using depth32float as their depth buffer format. A set of red and green planes are positioned very close to each other.\n      Higher sets are placed further from camera (and are scaled for better visual purpose).\n      To use reversed z to render your scene, you will need depth store value to be 0.0, depth compare function to be greater,\n      and remap depth range by multiplying an additional matrix to your projection matrix.\n      Related reading:\n      https://developer.nvidia.com/content/depth-precision-visualized\n      https://thxforthefish.com/posts/reverse_z/\n      `,\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './vertex.wgsl',\n        contents: vertexWGSL,\n        editable: true,\n      },\n      {\n        name: './fragment.wgsl',\n        contents: fragmentWGSL,\n        editable: true,\n      },\n      {\n        name: './vertexDepthPrePass.wgsl',\n        contents: vertexDepthPrePassWGSL,\n        editable: true,\n      },\n      {\n        name: './vertexTextureQuad.wgsl',\n        contents: vertexTextureQuadWGSL,\n        editable: true,\n      },\n      {\n        name: './fragmentTextureQuad.wgsl',\n        contents: fragmentTextureQuadWGSL,\n        editable: true,\n      },\n      {\n        name: './vertexPrecisionErrorPass.wgsl',\n        contents: vertexPrecisionErrorPassWGSL,\n        editable: true,\n      },\n      {\n        name: './fragmentPrecisionErrorPass.wgsl',\n        contents: fragmentPrecisionErrorPassWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ReversedZ;\n"},{name:"./vertex.wgsl",contents:f.a,editable:!0},{name:"./fragment.wgsl",contents:l.a,editable:!0},{name:"./vertexDepthPrePass.wgsl",contents:m.a,editable:!0},{name:"./vertexTextureQuad.wgsl",contents:h.a,editable:!0},{name:"./fragmentTextureQuad.wgsl",contents:P.a,editable:!0},{name:"./vertexPrecisionErrorPass.wgsl",contents:v.a,editable:!0},{name:"./fragmentPrecisionErrorPass.wgsl",contents:g.a,editable:!0}],filename:e})}}.call(this,"src/sample/reversedZ/main.ts","src/sample/reversedZ")},NTEr:function(e,n,t){"use strict";n.a="[[group(1), binding(0)]] var depthTexture: texture_depth_2d;\n\n[[stage(fragment)]]\nfn main([[builtin(position)]] coord : vec4<f32>,\n        [[location(0)]] clipPos : vec4<f32>)\n     -> [[location(0)]] vec4<f32> {\n  let depthValue = textureLoad(depthTexture, vec2<i32>(floor(coord.xy)), 0);\n  let v : f32 = abs(clipPos.z / clipPos.w - depthValue) * 2000000.0;\n  return vec4<f32>(v, v, v, 1.0);\n}\n"},VBXA:function(e,n,t){"use strict";n.a="[[block]] struct Uniforms {\n  modelMatrix : array<mat4x4<f32>, 5>;\n};\n[[block]] struct Camera {\n  viewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n[[binding(1), group(0)]] var<uniform> camera : Camera;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] clipPos : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[builtin(instance_index)]] instanceIdx : u32,\n        [[location(0)]] position : vec4<f32>) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = camera.viewProjectionMatrix * uniforms.modelMatrix[instanceIdx] * position;\n  output.clipPos = output.Position;\n  return output;\n}\n"},YLbJ:function(e,n,t){"use strict";n.a="[[block]] struct Uniforms {\n  modelMatrix : array<mat4x4<f32>, 5>;\n};\n[[block]] struct Camera {\n  viewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n[[binding(1), group(0)]] var<uniform> camera : Camera;\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragColor : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[builtin(instance_index)]] instanceIdx : u32,\n        [[location(0)]] position : vec4<f32>,\n        [[location(1)]] color : vec4<f32>) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = camera.viewProjectionMatrix * uniforms.modelMatrix[instanceIdx] * position;\n  output.fragColor = color;\n  return output;\n}"},ayAE:function(e,n,t){"use strict";n.a="[[stage(fragment)]]\nfn main([[location(0)]] fragColor : vec4<f32>) -> [[location(0)]] vec4<f32> {\n  return fragColor;\n}\n"},aze8:function(e,n,t){"use strict";n.a="[[block]] struct Uniforms {\n  modelMatrix : array<mat4x4<f32>, 5>;\n};\n[[block]] struct Camera {\n  viewProjectionMatrix : mat4x4<f32>;\n};\n\n[[binding(0), group(0)]] var<uniform> uniforms : Uniforms;\n[[binding(1), group(0)]] var<uniform> camera : Camera;\n\n[[stage(vertex)]]\nfn main([[builtin(instance_index)]] instanceIdx : u32,\n        [[location(0)]] position : vec4<f32>)\n     -> [[builtin(position)]] vec4<f32> {\n  return camera.viewProjectionMatrix * uniforms.modelMatrix[instanceIdx] * position;\n}\n"},bxpb:function(e,n,t){"use strict";n.a="[[stage(vertex)]]\nfn main([[builtin(vertex_index)]] VertexIndex : u32)\n     -> [[builtin(position)]] vec4<f32> {\n  var pos : array<vec2<f32>, 6> = array<vec2<f32>, 6>(\n    vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0), vec2<f32>(-1.0, 1.0),\n    vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, -1.0), vec2<f32>(1.0, 1.0));\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"},oROU:function(e,n,t){"use strict";n.a="[[group(0), binding(0)]] var depthTexture: texture_depth_2d;\n\n[[stage(fragment)]]\nfn main([[builtin(position)]] coord : vec4<f32>)\n     -> [[location(0)]] vec4<f32> {\n  let depthValue = textureLoad(depthTexture, vec2<i32>(floor(coord.xy)), 0);\n  return vec4<f32>(depthValue, depthValue, depthValue, 1.0);\n}\n"}}]);