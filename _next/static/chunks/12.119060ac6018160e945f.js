(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/nSZ":function(e,n,r){"use strict";n.a="[[block]] struct Uniforms {\r\n  modelMatrix : mat4x4<f32>;\r\n  normalModelMatrix : mat4x4<f32>;\r\n};\r\n[[block]] struct Camera {\r\n  viewProjectionMatrix : mat4x4<f32>;\r\n};\r\n[[group(0), binding(0)]] var<uniform> uniforms : Uniforms;\r\n[[group(0), binding(1)]] var<uniform> camera : Camera;\r\n\r\nstruct VertexOutput {\r\n  [[builtin(position)]] Position : vec4<f32>;\r\n  [[location(0)]] fragPosition: vec3<f32>;  // position in world space\r\n  [[location(1)]] fragNormal: vec3<f32>;    // normal in world space\r\n  [[location(2)]] fragUV: vec2<f32>;\r\n};\r\n\r\n[[stage(vertex)]]\r\nfn main([[location(0)]] position : vec3<f32>,\r\n        [[location(1)]] normal : vec3<f32>,\r\n        [[location(2)]] uv : vec2<f32>) -> VertexOutput {\r\n  var output : VertexOutput;\r\n  output.fragPosition = (uniforms.modelMatrix * vec4<f32>(position, 1.0)).xyz;\r\n  output.Position = camera.viewProjectionMatrix * vec4<f32>(output.fragPosition, 1.0);\r\n  output.fragNormal = normalize((uniforms.normalModelMatrix * vec4<f32>(normal, 1.0)).xyz);\r\n  output.fragUV = uv;\r\n  return output;\r\n}"},GhJw:function(e,n,r){"use strict";n.a="struct LightData {\r\n  position : vec4<f32>;\r\n  color : vec3<f32>;\r\n  radius : f32;\r\n};\r\n[[block]] struct LightsBuffer {\r\n  lights: array<LightData>;\r\n};\r\n[[group(0), binding(0)]] var<storage, read_write> lightsBuffer: LightsBuffer;\r\n\r\n[[block]] struct Config {\r\n  numLights : u32;\r\n};\r\n[[group(0), binding(1)]] var<uniform> config: Config;\r\n\r\n[[block]] struct LightExtent {\r\n  min : vec4<f32>;\r\n  max : vec4<f32>;\r\n};\r\n[[group(0), binding(2)]] var<uniform> lightExtent: LightExtent;\r\n\r\n[[stage(compute), workgroup_size(64, 1, 1)]]\r\nfn main([[builtin(global_invocation_id)]] GlobalInvocationID : vec3<u32>) {\r\n  var index = GlobalInvocationID.x;\r\n  if (index >= config.numLights) {\r\n    return;\r\n  }\r\n\r\n  lightsBuffer.lights[index].position.y = lightsBuffer.lights[index].position.y - 0.5 - 0.003 * (f32(index) - 64.0 * floor(f32(index) / 64.0));\r\n\r\n  if (lightsBuffer.lights[index].position.y < lightExtent.min.y) {\r\n    lightsBuffer.lights[index].position.y = lightExtent.max.y;\r\n  }\r\n}\r\n"},QqoD:function(e,n,r){"use strict";r.d(n,"a",(function(){return f}));var t=r("FvBH"),a=r.n(t);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(t=(o=s.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(u){a=!0,i=u}finally{try{t||null==s.return||s.return()}finally{if(a)throw i}}return r}}(e,n)||function(e,n){if(e){if("string"===typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=r("IOcx");var u={xy:[0,1],xz:[0,2],yz:[1,2]};var f={positions:a.a.positions,triangles:a.a.cells,normals:[],uvs:[]};f.normals=function(e,n){var r=e.map((function(){return[0,0,0]}));return n.forEach((function(n){var t=o(n,3),a=t[0],i=t[1],u=t[2],f=e[a],c=e[i],d=e[u],l=s.b.subtract(s.b.create(),c,f),g=s.b.subtract(s.b.create(),d,f);s.b.normalize(l,l),s.b.normalize(g,g);var m=s.b.cross(s.b.create(),l,g);s.b.add(r[a],r[a],m),s.b.add(r[i],r[i],m),s.b.add(r[u],r[u],m)})),r.forEach((function(e){s.b.normalize(e,e)})),r}(f.positions,f.triangles),f.uvs=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xy",r=u[n],t=e.map((function(){return[0,0]})),a=[1/0,1/0],i=[-1/0,-1/0];return e.forEach((function(e,n){t[n][0]=e[r[0]],t[n][1]=e[r[1]],a[0]=Math.min(e[r[0]],a[0]),a[1]=Math.min(e[r[1]],a[1]),i[0]=Math.max(e[r[0]],i[0]),i[1]=Math.max(e[r[1]],i[1])})),t.forEach((function(e){e[0]=(e[0]-a[0])/(i[0]-a[0]),e[1]=(e[1]-a[1])/(i[1]-a[1])})),t}(f.positions,"xy"),f.triangles.push([f.positions.length,f.positions.length+2,f.positions.length+1],[f.positions.length,f.positions.length+1,f.positions.length+3]),f.positions.push([-100,20,-100],[100,20,100],[-100,20,100],[100,20,-100]),f.normals.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),f.uvs.push([0,0],[1,1],[0,1],[1,0])},TAgc:function(e,n,r){"use strict";r.r(n),function(e,t){var a=r("o0o1"),i=r.n(a),o=r("HaE+"),s=r("8i9l"),u=r("IOcx"),f=r("QqoD"),c=r("GhJw"),d=r("/nSZ"),l=r("gTbQ"),g=r("UtUJ"),m=r("kruy"),p=r("abG/"),v=1024,h=u.b.fromValues(-50,-30,-50),b=u.b.fromValues(50,50,50),x=function(){var e=Object(o.a)(i.a.mark((function e(n){var r,t,a,o,s,x,B,y,P,w,U,G,E,M,T,S,L,A,R,V,D,N,_,C,z,O,F,I,k,q,Y,j,W,Q,X,H,J,Z,$,K,ee,ne,re,te,ae,ie,oe,se,ue,fe,ce,de,le,ge,me,pe,ve,he,be,xe,Be,ye,Pe,we,Ue;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ue=function(){if(r.current){var e=we();o.queue.writeBuffer(Q,0,e.buffer,e.byteOffset,e.byteLength);var n=o.createCommandEncoder(),t=n.beginRenderPass(k);t.setPipeline(N),t.setBindGroup(0,X),t.setVertexBuffer(0,w),t.setIndexBuffer(M,"uint16"),t.drawIndexed(E),t.endPass();var a=n.beginComputePass();if(a.setPipeline(ue),a.setBindGroup(0,ce),a.dispatch(Math.ceil(16)),a.endPass(),"gBuffers view"===Y.mode){q.colorAttachments[0].view=s.getCurrentTexture().createView();var i=n.beginRenderPass(q);i.setPipeline(O),i.setBindGroup(0,Z),i.setBindGroup(1,J),i.draw(6),i.endPass()}else{q.colorAttachments[0].view=s.getCurrentTexture().createView();var u=n.beginRenderPass(q);u.setPipeline(F),u.setBindGroup(0,Z),u.setBindGroup(1,fe),u.setBindGroup(2,J),u.draw(6),u.endPass()}o.queue.submit([n.finish()]),requestAnimationFrame(Ue)}},we=function(){var e=u.b.fromValues(0,50,-100),n=Math.PI*(Date.now()/5e3);u.b.rotateY(e,e,ge,n);var r=u.a.create();return u.a.lookAt(r,e,ge,le),u.a.multiply(ve,me,r),ve},r=n.canvasRef,t=n.gui,e.next=5,navigator.gpu.requestAdapter();case 5:return a=e.sent,e.next=8,a.requestDevice();case 8:if(o=e.sent,null!==r.current){e.next=11;break}return e.abrupt("return");case 11:for(s=r.current.getContext("webgpu"),x=window.devicePixelRatio||1,B=[r.current.clientWidth*x,r.current.clientHeight*x],y=B[0]/B[1],P=s.getPreferredFormat(a),s.configure({device:o,format:P,size:B}),8,w=o.createBuffer({size:8*f.a.positions.length*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),U=new Float32Array(w.getMappedRange()),G=0;G<f.a.positions.length;++G)U.set(f.a.positions[G],8*G),U.set(f.a.normals[G],8*G+3),U.set(f.a.uvs[G],8*G+6);for(w.unmap(),E=3*f.a.triangles.length,M=o.createBuffer({size:E*Uint16Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),T=new Uint16Array(M.getMappedRange()),S=0;S<f.a.triangles.length;++S)T.set(f.a.triangles[S],3*S);for(M.unmap(),L=o.createTexture({size:[].concat(B,[3]),usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"rgba32float"}),A=o.createTexture({size:B,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"bgra8unorm"}),R=[L.createView({baseArrayLayer:0,arrayLayerCount:1}),L.createView({baseArrayLayer:1,arrayLayerCount:1}),A.createView()],V=[{arrayStride:8*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*Float32Array.BYTES_PER_ELEMENT,format:"float32x3"},{shaderLocation:2,offset:6*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}],D={topology:"triangle-list",cullMode:"back"},N=o.createRenderPipeline({vertex:{module:o.createShaderModule({code:d.a}),entryPoint:"main",buffers:V},fragment:{module:o.createShaderModule({code:l.a}),entryPoint:"main",targets:[{format:"rgba32float"},{format:"rgba32float"},{format:"bgra8unorm"}]},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"},primitive:D}),_=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}}]}),C=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),z=o.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),O=o.createRenderPipeline({layout:o.createPipelineLayout({bindGroupLayouts:[_,z]}),vertex:{module:o.createShaderModule({code:g.a}),entryPoint:"main"},fragment:{module:o.createShaderModule({code:m.a}),entryPoint:"main",targets:[{format:P}]},primitive:D}),F=o.createRenderPipeline({layout:o.createPipelineLayout({bindGroupLayouts:[_,C,z]}),vertex:{module:o.createShaderModule({code:g.a}),entryPoint:"main"},fragment:{module:o.createShaderModule({code:p.a}),entryPoint:"main",targets:[{format:P}]},primitive:D}),I=o.createTexture({size:B,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),k={colorAttachments:[{view:R[0],loadValue:{r:Number.MAX_VALUE,g:Number.MAX_VALUE,b:Number.MAX_VALUE,a:1},storeOp:"store"},{view:R[1],loadValue:{r:0,g:0,b:1,a:1},storeOp:"store"},{view:R[2],loadValue:{r:0,g:0,b:0,a:1},storeOp:"store"}],depthStencilAttachment:{view:I.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},q={colorAttachments:[{view:void 0,loadValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]},Y={mode:"rendering",numLights:128},j=function(){var e=o.createBuffer({size:Uint32Array.BYTES_PER_ELEMENT,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return new Uint32Array(e.getMappedRange())[0]=Y.numLights,e.unmap(),e}(),t.add(Y,"mode",["rendering","gBuffers view"]),t.add(Y,"numLights",1,v).step(1).onChange((function(){o.queue.writeBuffer(j,0,new Uint32Array([Y.numLights]))})),W=o.createBuffer({size:128,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Q=o.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),X=o.createBindGroup({layout:N.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:W}},{binding:1,resource:{buffer:Q}}]}),H=o.createBuffer({size:8,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),J=o.createBindGroup({layout:z,entries:[{binding:0,resource:{buffer:H}}]}),Z=o.createBindGroup({layout:_,entries:[{binding:0,resource:R[0]},{binding:1,resource:R[1]},{binding:2,resource:R[2]}]}),$=u.b.create(),u.b.sub($,b,h),8,K=8*Float32Array.BYTES_PER_ELEMENT*v,ee=o.createBuffer({size:K,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0}),ne=new Float32Array(ee.getMappedRange()),re=u.c.create(),te=0,ae=0;ae<v;ae++){for(te=8*ae,ie=0;ie<3;ie++)re[ie]=Math.random()*$[ie]+h[ie];re[3]=1,ne.set(re,te),re[0]=2*Math.random(),re[1]=2*Math.random(),re[2]=2*Math.random(),re[3]=20,ne.set(re,te+4)}ee.unmap(),oe=o.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),(se=new Float32Array(8)).set(h,0),se.set(b,4),o.queue.writeBuffer(oe,0,se.buffer,se.byteOffset,se.byteLength),ue=o.createComputePipeline({compute:{module:o.createShaderModule({code:c.a}),entryPoint:"main"}}),fe=o.createBindGroup({layout:C,entries:[{binding:0,resource:{buffer:ee}},{binding:1,resource:{buffer:j}}]}),ce=o.createBindGroup({layout:ue.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:ee}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:oe}}]}),de=u.b.fromValues(0,50,-100),le=u.b.fromValues(0,1,0),ge=u.b.fromValues(0,0,0),me=u.a.create(),u.a.perspective(me,2*Math.PI/5,y,1,2e3),pe=u.a.create(),u.a.lookAt(pe,de,ge,le),ve=u.a.create(),u.a.multiply(ve,me,pe),he=u.a.create(),u.a.translate(he,he,u.b.fromValues(0,-5,0)),u.a.translate(he,he,u.b.fromValues(0,-40,0)),be=ve,o.queue.writeBuffer(Q,0,be.buffer,be.byteOffset,be.byteLength),xe=he,o.queue.writeBuffer(W,0,xe.buffer,xe.byteOffset,xe.byteLength),Be=u.a.create(),u.a.invert(Be,he),u.a.transpose(Be,Be),ye=Be,o.queue.writeBuffer(W,64,ye.buffer,ye.byteOffset,ye.byteLength),Pe=new Float32Array(B),o.queue.writeBuffer(H,0,Pe.buffer,Pe.byteOffset,Pe.byteLength),requestAnimationFrame(Ue);case 93:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return Object(s.a)({name:"Deferred Rendering",description:"This example shows how to do deferred rendering with webgpu.\n      Render geometry info to multiple targets in the gBuffers in the first pass.\n      In this sample we have 3 gBuffers for positions, normals, and albedo.\n      And then do the lighting in a second pass with per fragment data read from gBuffers so it's independent of scene complexity.\n      We also update light position in a compute shader, where further operations like tile/cluster culling could happen.",gui:!0,init:x,sources:[{name:e.substr(t.length+1),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\nimport { mat4, vec3, vec4 } from 'gl-matrix';\nimport { mesh } from '../../meshes/stanfordDragon';\n\nimport lightUpdate from './lightUpdate.wgsl';\nimport vertexWriteGBuffers from './vertexWriteGBuffers.wgsl';\nimport fragmentWriteGBuffers from './fragmentWriteGBuffers.wgsl';\nimport vertexTextureQuad from './vertexTextureQuad.wgsl';\nimport fragmentGBuffersDebugView from './fragmentGBuffersDebugView.wgsl';\nimport fragmentDeferredRendering from './fragmentDeferredRendering.wgsl';\n\nconst kMaxNumLights = 1024;\nconst lightExtentMin = vec3.fromValues(-50, -30, -50);\nconst lightExtentMax = vec3.fromValues(50, 50, 50);\n\nconst init: SampleInit = async ({ canvasRef, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('webgpu');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const aspect = presentationSize[0] / presentationSize[1];\n  const presentationFormat = context.getPreferredFormat(adapter);\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  // Create the model vertex buffer.\n  const kVertexStride = 8;\n  const vertexBuffer = device.createBuffer({\n    // position: vec3, normal: vec3, uv: vec2\n    size:\n      mesh.positions.length * kVertexStride * Float32Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Float32Array(vertexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.positions.length; ++i) {\n      mapping.set(mesh.positions[i], kVertexStride * i);\n      mapping.set(mesh.normals[i], kVertexStride * i + 3);\n      mapping.set(mesh.uvs[i], kVertexStride * i + 6);\n    }\n    vertexBuffer.unmap();\n  }\n\n  // Create the model index buffer.\n  const indexCount = mesh.triangles.length * 3;\n  const indexBuffer = device.createBuffer({\n    size: indexCount * Uint16Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.INDEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Uint16Array(indexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.triangles.length; ++i) {\n      mapping.set(mesh.triangles[i], 3 * i);\n    }\n    indexBuffer.unmap();\n  }\n\n  // GBuffer texture render targets\n  const gBufferTexture2DFloat = device.createTexture({\n    size: [...presentationSize, 3],\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,\n    format: 'rgba32float',\n  });\n  const gBufferTextureAlbedo = device.createTexture({\n    size: presentationSize,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,\n    format: 'bgra8unorm',\n  });\n  const gBufferTextureViews = [\n    gBufferTexture2DFloat.createView({ baseArrayLayer: 0, arrayLayerCount: 1 }),\n    gBufferTexture2DFloat.createView({ baseArrayLayer: 1, arrayLayerCount: 1 }),\n    gBufferTextureAlbedo.createView(),\n  ];\n\n  const vertexBuffers: Iterable<GPUVertexBufferLayout> = [\n    {\n      arrayStride: Float32Array.BYTES_PER_ELEMENT * 8,\n      attributes: [\n        {\n          // position\n          shaderLocation: 0,\n          offset: 0,\n          format: 'float32x3',\n        },\n        {\n          // normal\n          shaderLocation: 1,\n          offset: Float32Array.BYTES_PER_ELEMENT * 3,\n          format: 'float32x3',\n        },\n        {\n          // uv\n          shaderLocation: 2,\n          offset: Float32Array.BYTES_PER_ELEMENT * 6,\n          format: 'float32x2',\n        },\n      ],\n    },\n  ];\n\n  const primitive: GPUPrimitiveState = {\n    topology: 'triangle-list',\n    cullMode: 'back',\n  };\n\n  const writeGBuffersPipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexWriteGBuffers,\n      }),\n      entryPoint: 'main',\n      buffers: vertexBuffers,\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentWriteGBuffers,\n      }),\n      entryPoint: 'main',\n      targets: [\n        // position\n        { format: 'rgba32float' },\n        // normal\n        { format: 'rgba32float' },\n        // albedo\n        { format: 'bgra8unorm' },\n      ],\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n    primitive,\n  });\n\n  const gBufferTexturesBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'unfilterable-float',\n        },\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'unfilterable-float',\n        },\n      },\n      {\n        binding: 2,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'unfilterable-float',\n        },\n      },\n    ],\n  });\n\n  const lightsBufferBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,\n        buffer: {\n          type: 'storage',\n        },\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n    ],\n  });\n\n  const canvasSizeUniformBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n    ],\n  });\n\n  const gBuffersDebugViewPipeline = device.createRenderPipeline({\n    layout: device.createPipelineLayout({\n      bindGroupLayouts: [\n        gBufferTexturesBindGroupLayout,\n        canvasSizeUniformBindGroupLayout,\n      ],\n    }),\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexTextureQuad,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentGBuffersDebugView,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive,\n  });\n\n  const deferredRenderPipeline = device.createRenderPipeline({\n    layout: device.createPipelineLayout({\n      bindGroupLayouts: [\n        gBufferTexturesBindGroupLayout,\n        lightsBufferBindGroupLayout,\n        canvasSizeUniformBindGroupLayout,\n      ],\n    }),\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexTextureQuad,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentDeferredRendering,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive,\n  });\n\n  const depthTexture = device.createTexture({\n    size: presentationSize,\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const writeGBufferPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: gBufferTextureViews[0],\n\n        loadValue: {\n          r: Number.MAX_VALUE,\n          g: Number.MAX_VALUE,\n          b: Number.MAX_VALUE,\n          a: 1.0,\n        },\n        storeOp: 'store',\n      },\n      {\n        view: gBufferTextureViews[1],\n\n        loadValue: { r: 0.0, g: 0.0, b: 1.0, a: 1.0 },\n        storeOp: 'store',\n      },\n      {\n        view: gBufferTextureViews[2],\n\n        loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const textureQuadPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n  };\n\n  const settings = {\n    mode: 'rendering',\n    numLights: 128,\n  };\n  const configUniformBuffer = (() => {\n    const buffer = device.createBuffer({\n      size: Uint32Array.BYTES_PER_ELEMENT,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = settings.numLights;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  gui.add(settings, 'mode', ['rendering', 'gBuffers view']);\n  gui\n    .add(settings, 'numLights', 1, kMaxNumLights)\n    .step(1)\n    .onChange(() => {\n      device.queue.writeBuffer(\n        configUniformBuffer,\n        0,\n        new Uint32Array([settings.numLights])\n      );\n    });\n\n  const modelUniformBuffer = device.createBuffer({\n    size: 4 * 16 * 2, // two 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const cameraUniformBuffer = device.createBuffer({\n    size: 4 * 16, // 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sceneUniformBindGroup = device.createBindGroup({\n    layout: writeGBuffersPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: modelUniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: cameraUniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const canvasSizeUniformBuffer = device.createBuffer({\n    size: 4 * 2,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const canvasSizeUniformBindGroup = device.createBindGroup({\n    layout: canvasSizeUniformBindGroupLayout,\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: canvasSizeUniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const gBufferTexturesBindGroup = device.createBindGroup({\n    layout: gBufferTexturesBindGroupLayout,\n    entries: [\n      {\n        binding: 0,\n        resource: gBufferTextureViews[0],\n      },\n      {\n        binding: 1,\n        resource: gBufferTextureViews[1],\n      },\n      {\n        binding: 2,\n        resource: gBufferTextureViews[2],\n      },\n    ],\n  });\n\n  // Lights data are uploaded in a storage buffer\n  // which could be updated/culled/etc. with a compute shader\n  const extent = vec3.create();\n  vec3.sub(extent, lightExtentMax, lightExtentMin);\n  const lightDataStride = 8;\n  const bufferSizeInByte =\n    Float32Array.BYTES_PER_ELEMENT * lightDataStride * kMaxNumLights;\n  const lightsBuffer = device.createBuffer({\n    size: bufferSizeInByte,\n    usage: GPUBufferUsage.STORAGE,\n    mappedAtCreation: true,\n  });\n\n  // We randomaly populate lights randomly in a box range\n  // And simply move them along y-axis per frame to show they are\n  // dynamic lightings\n  const lightData = new Float32Array(lightsBuffer.getMappedRange());\n  const tmpVec4 = vec4.create();\n  let offset = 0;\n  for (let i = 0; i < kMaxNumLights; i++) {\n    offset = lightDataStride * i;\n    // position\n    for (let i = 0; i < 3; i++) {\n      tmpVec4[i] = Math.random() * extent[i] + lightExtentMin[i];\n    }\n    tmpVec4[3] = 1;\n    lightData.set(tmpVec4, offset);\n    // color\n    tmpVec4[0] = Math.random() * 2;\n    tmpVec4[1] = Math.random() * 2;\n    tmpVec4[2] = Math.random() * 2;\n    // radius\n    tmpVec4[3] = 20.0;\n    lightData.set(tmpVec4, offset + 4);\n  }\n  lightsBuffer.unmap();\n\n  const lightExtentBuffer = device.createBuffer({\n    size: 4 * 8,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n  const lightExtentData = new Float32Array(8);\n  lightExtentData.set(lightExtentMin, 0);\n  lightExtentData.set(lightExtentMax, 4);\n  device.queue.writeBuffer(\n    lightExtentBuffer,\n    0,\n    lightExtentData.buffer,\n    lightExtentData.byteOffset,\n    lightExtentData.byteLength\n  );\n\n  const lightUpdateComputePipeline = device.createComputePipeline({\n    compute: {\n      module: device.createShaderModule({\n        code: lightUpdate,\n      }),\n      entryPoint: 'main',\n    },\n  });\n  const lightsBufferBindGroup = device.createBindGroup({\n    layout: lightsBufferBindGroupLayout,\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: lightsBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: configUniformBuffer,\n        },\n      },\n    ],\n  });\n  const lightsBufferComputeBindGroup = device.createBindGroup({\n    layout: lightUpdateComputePipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: lightsBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: configUniformBuffer,\n        },\n      },\n      {\n        binding: 2,\n        resource: {\n          buffer: lightExtentBuffer,\n        },\n      },\n    ],\n  });\n  //--------------------\n\n  // Scene matrices\n  const eyePosition = vec3.fromValues(0, 50, -100);\n  const upVector = vec3.fromValues(0, 1, 0);\n  const origin = vec3.fromValues(0, 0, 0);\n\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 2000.0);\n\n  const viewMatrix = mat4.create();\n  mat4.lookAt(viewMatrix, eyePosition, origin, upVector);\n\n  const viewProjMatrix = mat4.create();\n  mat4.multiply(viewProjMatrix, projectionMatrix, viewMatrix);\n\n  // Move the model so it's centered.\n  const modelMatrix = mat4.create();\n  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0, -5, 0));\n  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0, -40, 0));\n\n  const cameraMatrixData = viewProjMatrix as Float32Array;\n  device.queue.writeBuffer(\n    cameraUniformBuffer,\n    0,\n    cameraMatrixData.buffer,\n    cameraMatrixData.byteOffset,\n    cameraMatrixData.byteLength\n  );\n  const modelData = modelMatrix as Float32Array;\n  device.queue.writeBuffer(\n    modelUniformBuffer,\n    0,\n    modelData.buffer,\n    modelData.byteOffset,\n    modelData.byteLength\n  );\n  const invertTransposeModelMatrix = mat4.create();\n  mat4.invert(invertTransposeModelMatrix, modelMatrix);\n  mat4.transpose(invertTransposeModelMatrix, invertTransposeModelMatrix);\n  const normalModelData = invertTransposeModelMatrix as Float32Array;\n  device.queue.writeBuffer(\n    modelUniformBuffer,\n    64,\n    normalModelData.buffer,\n    normalModelData.byteOffset,\n    normalModelData.byteLength\n  );\n  // Pass the canvas size to shader to help sample from gBuffer textures using coord\n  const canvasSizeData = new Float32Array(presentationSize);\n  device.queue.writeBuffer(\n    canvasSizeUniformBuffer,\n    0,\n    canvasSizeData.buffer,\n    canvasSizeData.byteOffset,\n    canvasSizeData.byteLength\n  );\n\n  // Rotates the camera around the origin based on time.\n  function getCameraViewProjMatrix() {\n    const eyePosition = vec3.fromValues(0, 50, -100);\n\n    const rad = Math.PI * (Date.now() / 5000);\n    vec3.rotateY(eyePosition, eyePosition, origin, rad);\n\n    const viewMatrix = mat4.create();\n    mat4.lookAt(viewMatrix, eyePosition, origin, upVector);\n\n    mat4.multiply(viewProjMatrix, projectionMatrix, viewMatrix);\n    return viewProjMatrix as Float32Array;\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    const cameraViewProj = getCameraViewProjMatrix();\n    device.queue.writeBuffer(\n      cameraUniformBuffer,\n      0,\n      cameraViewProj.buffer,\n      cameraViewProj.byteOffset,\n      cameraViewProj.byteLength\n    );\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      // Write position, normal, albedo etc. data to gBuffers\n      const gBufferPass = commandEncoder.beginRenderPass(\n        writeGBufferPassDescriptor\n      );\n      gBufferPass.setPipeline(writeGBuffersPipeline);\n      gBufferPass.setBindGroup(0, sceneUniformBindGroup);\n      gBufferPass.setVertexBuffer(0, vertexBuffer);\n      gBufferPass.setIndexBuffer(indexBuffer, 'uint16');\n      gBufferPass.drawIndexed(indexCount);\n      gBufferPass.endPass();\n    }\n    {\n      // Update lights position\n      const lightPass = commandEncoder.beginComputePass();\n      lightPass.setPipeline(lightUpdateComputePipeline);\n      lightPass.setBindGroup(0, lightsBufferComputeBindGroup);\n      lightPass.dispatch(Math.ceil(kMaxNumLights / 64));\n      lightPass.endPass();\n    }\n    {\n      if (settings.mode === 'gBuffers view') {\n        // GBuffers debug view\n        // Left: position\n        // Middle: normal\n        // Right: albedo (use uv to mimic a checkerboard texture)\n        textureQuadPassDescriptor.colorAttachments[0].view = context\n          .getCurrentTexture()\n          .createView();\n        const debugViewPass = commandEncoder.beginRenderPass(\n          textureQuadPassDescriptor\n        );\n        debugViewPass.setPipeline(gBuffersDebugViewPipeline);\n        debugViewPass.setBindGroup(0, gBufferTexturesBindGroup);\n        debugViewPass.setBindGroup(1, canvasSizeUniformBindGroup);\n        debugViewPass.draw(6);\n        debugViewPass.endPass();\n      } else {\n        // Deferred rendering\n        textureQuadPassDescriptor.colorAttachments[0].view = context\n          .getCurrentTexture()\n          .createView();\n        const deferredRenderingPass = commandEncoder.beginRenderPass(\n          textureQuadPassDescriptor\n        );\n        deferredRenderingPass.setPipeline(deferredRenderPipeline);\n        deferredRenderingPass.setBindGroup(0, gBufferTexturesBindGroup);\n        deferredRenderingPass.setBindGroup(1, lightsBufferBindGroup);\n        deferredRenderingPass.setBindGroup(2, canvasSizeUniformBindGroup);\n        deferredRenderingPass.draw(6);\n        deferredRenderingPass.endPass();\n      }\n    }\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst DeferredRendering: () => JSX.Element = () =>\n  makeSample({\n    name: 'Deferred Rendering',\n    description: `This example shows how to do deferred rendering with webgpu.\n      Render geometry info to multiple targets in the gBuffers in the first pass.\n      In this sample we have 3 gBuffers for positions, normals, and albedo.\n      And then do the lighting in a second pass with per fragment data read from gBuffers so it's independent of scene complexity.\n      We also update light position in a compute shader, where further operations like tile/cluster culling could happen.`,\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: 'vertexWriteGBuffers.wgsl',\n        contents: vertexWriteGBuffers,\n        editable: true,\n      },\n      {\n        name: 'fragmentWriteGBuffers.wgsl',\n        contents: fragmentWriteGBuffers,\n        editable: true,\n      },\n      {\n        name: 'vertexTextureQuad.wgsl',\n        contents: vertexTextureQuad,\n        editable: true,\n      },\n      {\n        name: 'fragmentGBuffersDebugView.wgsl',\n        contents: fragmentGBuffersDebugView,\n        editable: true,\n      },\n      {\n        name: 'fragmentDeferredRendering.wgsl',\n        contents: fragmentDeferredRendering,\n        editable: true,\n      },\n      {\n        name: 'lightUpdate.wgsl',\n        contents: lightUpdate,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default DeferredRendering;\n"},{name:"vertexWriteGBuffers.wgsl",contents:d.a,editable:!0},{name:"fragmentWriteGBuffers.wgsl",contents:l.a,editable:!0},{name:"vertexTextureQuad.wgsl",contents:g.a,editable:!0},{name:"fragmentGBuffersDebugView.wgsl",contents:m.a,editable:!0},{name:"fragmentDeferredRendering.wgsl",contents:p.a,editable:!0},{name:"lightUpdate.wgsl",contents:c.a,editable:!0}],filename:e})}}.call(this,"src/sample/deferredRendering/main.ts","src/sample/deferredRendering")},UtUJ:function(e,n,r){"use strict";n.a="[[stage(vertex)]]\r\nfn main([[builtin(vertex_index)]] VertexIndex : u32)\r\n        -> [[builtin(position)]] vec4<f32> {\r\n    var pos = array<vec2<f32>, 6>(\r\n        vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0), vec2<f32>(-1.0, 1.0),\r\n        vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, -1.0), vec2<f32>(1.0, 1.0));\r\n\r\n    return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\r\n}\r\n"},"abG/":function(e,n,r){"use strict";n.a="[[group(0), binding(0)]] var gBufferPosition: texture_2d<f32>;\r\n[[group(0), binding(1)]] var gBufferNormal: texture_2d<f32>;\r\n[[group(0), binding(2)]] var gBufferAlbedo: texture_2d<f32>;\r\n\r\nstruct LightData {\r\n  position : vec4<f32>;\r\n  color : vec3<f32>;\r\n  radius : f32;\r\n};\r\n[[block]] struct LightsBuffer {\r\n  lights: array<LightData>;\r\n};\r\n[[group(1), binding(0)]] var<storage, read> lightsBuffer: LightsBuffer;\r\n\r\n[[block]] struct Config {\r\n  numLights : u32;\r\n};\r\n[[group(1), binding(1)]] var<uniform> config: Config;\r\n\r\n[[block]] struct CanvasConstants {\r\n  size: vec2<f32>;\r\n};\r\n[[group(2), binding(0)]] var<uniform> canvas : CanvasConstants;\r\n\r\n[[stage(fragment)]]\r\nfn main([[builtin(position)]] coord : vec4<f32>)\r\n     -> [[location(0)]] vec4<f32> {\r\n  var result = vec3<f32>(0.0, 0.0, 0.0);\r\n\r\n  let position = textureLoad(\r\n    gBufferPosition,\r\n    vec2<i32>(floor(coord.xy)),\r\n    0\r\n  ).xyz;\r\n\r\n  if (position.z > 10000.0) {\r\n    discard;\r\n  }\r\n\r\n  let normal = textureLoad(\r\n    gBufferNormal,\r\n    vec2<i32>(floor(coord.xy)),\r\n    0\r\n  ).xyz;\r\n\r\n  let albedo = textureLoad(\r\n    gBufferAlbedo,\r\n    vec2<i32>(floor(coord.xy)),\r\n    0\r\n  ).rgb;\r\n\r\n  for (var i : u32 = 0u; i < config.numLights; i = i + 1u) {\r\n    let L = lightsBuffer.lights[i].position.xyz - position;\r\n    let distance = length(L);\r\n    if (distance > lightsBuffer.lights[i].radius) {\r\n        continue;\r\n    }\r\n    let lambert = max(dot(normal, normalize(L)), 0.0);\r\n    result = result + vec3<f32>(\r\n      lambert * pow(1.0 - distance / lightsBuffer.lights[i].radius, 2.0) * lightsBuffer.lights[i].color * albedo);\r\n  }\r\n\r\n  // some manual ambient\r\n  result = result + vec3<f32>(0.2, 0.2, 0.2);\r\n\r\n  return vec4<f32>(result, 1.0);\r\n}\r\n"},gTbQ:function(e,n,r){"use strict";n.a="struct GBufferOutput {\r\n  [[location(0)]] position : vec4<f32>;\r\n  [[location(1)]] normal : vec4<f32>;\r\n\r\n  // Textures: diffuse color, specular color, smoothness, emissive etc. could go here\r\n  [[location(2)]] albedo : vec4<f32>;\r\n};\r\n\r\n[[stage(fragment)]]\r\nfn main([[location(0)]] fragPosition: vec3<f32>,\r\n        [[location(1)]] fragNormal: vec3<f32>,\r\n        [[location(2)]] fragUV : vec2<f32>) -> GBufferOutput {\r\n    var output : GBufferOutput;\r\n    output.position = vec4<f32>(fragPosition, 1.0);\r\n    output.normal = vec4<f32>(fragNormal, 1.0);\r\n    // faking some kind of checkerboard texture\r\n    let uv = floor(30.0 * fragUV);\r\n    let c = 0.2 + 0.5 * ((uv.x + uv.y) - 2.0 * floor((uv.x + uv.y) / 2.0));\r\n    output.albedo = vec4<f32>(c, c, c, 1.0);\r\n    return output;\r\n}"},kruy:function(e,n,r){"use strict";n.a="[[group(0), binding(0)]] var gBufferPosition: texture_2d<f32>;\r\n[[group(0), binding(1)]] var gBufferNormal: texture_2d<f32>;\r\n[[group(0), binding(2)]] var gBufferAlbedo: texture_2d<f32>;\r\n\r\n[[block]] struct CanvasConstants {\r\n  size: vec2<f32>;\r\n};\r\n[[group(1), binding(0)]] var<uniform> canvas : CanvasConstants;\r\n\r\n[[stage(fragment)]]\r\nfn main([[builtin(position)]] coord : vec4<f32>)\r\n     -> [[location(0)]] vec4<f32> {\r\n  var result : vec4<f32>;\r\n  let c = coord.xy / canvas.size;\r\n  if (c.x < 0.33333) {\r\n    result = textureLoad(\r\n      gBufferPosition,\r\n      vec2<i32>(floor(coord.xy)),\r\n      0\r\n    );\r\n  } elseif (c.x < 0.66667) {\r\n    result = textureLoad(\r\n      gBufferNormal,\r\n      vec2<i32>(floor(coord.xy)),\r\n      0\r\n    );\r\n    result.x = (result.x + 1.0) * 0.5;\r\n    result.y = (result.y + 1.0) * 0.5;\r\n    result.z = (result.z + 1.0) * 0.5;\r\n  } else {\r\n    result = textureLoad(\r\n      gBufferAlbedo,\r\n      vec2<i32>(floor(coord.xy)),\r\n      0\r\n    );\r\n  }\r\n  return result;\r\n}"}}]);