module.exports=function(s){s.initConfig({copy:{dist:{cwd:"src/",expand:!0,src:"**",dest:"dist/"}},uncss:{dist:{src:["index.html"],dest:"css/tidy.css"}}}),s.loadNpmTasks("grunt-uncss"),s.registerTask("default",["uncss"])};