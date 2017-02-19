   AFRAME.registerComponent('shaderfiles', {
       schema: {
         filename: {type: 'string', default: 'shaders/blue'}
       },

       init: function(data) {

         // this is me
        var thisMesh = this.el.object3D.children[0];


         // kudos Davide Aversa
         // http://www.davideaversa.it/2016/10/three-js-shader-loading-external-file/
         function ShaderLoader(mesh, vertex_url, fragment_url, texture0_url, onLoad, onProgress, onError) {
           // console.log(mesh);
             var vertex_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
             vertex_loader.setResponseType('text');
             vertex_loader.load(vertex_url, function (vertex_text) {
                 var fragment_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
                 fragment_loader.setResponseType('text');
                 fragment_loader.load(fragment_url, function (fragment_text) {
                     onLoad(mesh, vertex_text, fragment_text, texture0_url);
                 });
             }, onProgress, onError);
         }

         var myOnload = function(mesh, fs, vs, texture0_url) {

            var uniforms = {
                iGlobalTime: { type: "f", value: 1.0 },
                iResolution: { type: "v2", value: new THREE.Vector2() },
                // iChannel0:  { type: 't', value: THREE.ImageUtils.loadTexture( 'cubemap.jpg') }
            };
            // uniforms.iChannel0.value.wrapS = uniforms.iChannel0.value.wrapT = THREE.RepeatWrapping;

            uniforms.iResolution.value.x = 0.05; //window.innerWidth;
            uniforms.iResolution.value.y = 0.05; // window.innerHeight;




uniforms1 = {
	time:       { value: 1.0 },
	resolution: { value: new THREE.Vector2(1.0,1.0) },
};

uniforms2 = {
  time:       { value: 1.0 },
  resolution: { value: new THREE.Vector2(1.0,1.0) },
  texture0:    { value: new THREE.TextureLoader().load( texture0_url ) }
};

uniforms2.texture0.value.wrapS = uniforms2.texture0.value.wrapT = THREE.RepeatWrapping;

            mesh.material = new THREE.ShaderMaterial({
              vertexShader: vs,
             	fragmentShader: fs,
              uniforms: uniforms2
            });

            // console.log(mesh.material.uniforms);

         };

         ShaderLoader(
           thisMesh,
           this.data.filename+".fragment.glsl?a=" + Math.random(),
           this.data.filename+".vertex.glsl?a=" + Math.random(),
           this.data.filename+"_0.jpg?a=" + Math.random(),
           myOnload
         );


       },

       tick: function (time, timeDelta) {
        var thisMesh = this.el.object3D.children[0];

        if (thisMesh.material.type == "ShaderMaterial") {
          // thisMesh.material.uniforms.iGlobalTime.value = time/1000;
          thisMesh.material.uniforms.time.value = time/1000;
        }

        // var obj = aaa.getObject3D('mesh');
        // if (obj.material.type == "ShaderMaterial") {
        //   aaa.getObject3D('mesh').material.uniforms.iGlobalTime.value = time/1000;
        // }


       }


   });
