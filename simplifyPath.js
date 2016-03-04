/*
Overview: Given an absolute path for a file (Unix-style), simplify it.

** simplify

path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"


Do Nothing
./ === /
// === /

Pop off folders
../

Push into folders
/[a-zA-Z1-9]

folders = []
temp = ''

Inputs: <string> path

Outputs: <string> path

function simplify (path)
  var simplified = '';
  let folders = [];
  let temp = ''

  for i in path
    if (path[i] === '/' && temp.length)
      folders.push(temp);
      temp = '';

    temp += path[i];

  for folder in folders
    if (folder === '/.' || (folder === '/' && folder + 1 === '/'))
      folders.splice(i, 1);
    if (folder === '/..')
      folder.splice(i - 1, 2)

  return folders.join('');
*/
"use strict";

function simplifyPath (path) {
  var folders = getAbsolutePath(getFolderNames(path));
  return folders.length > 0 ? folders.join('') : '/';
}

function getFolderNames (path) {
  var temp = '';
  var folders = [];
  for (var i = 0; i < path.length; i++) {
    var current = path[i];
    if (current === '/' && temp.length){
      folders.push(temp);
      temp = '';
    }
    temp += current;
  }
  folders.push(temp);
  return folders;
}

function getAbsolutePath (folders) {
  for (var i = 0; i < folders.length; i++) {
    var folder = folders[i];
    if (folder === '/.' || (folder === '/')) {
      folders.splice(i, 1);
      i = i - 1;
    } else if (folder === '/..'){
        if (folders[i - 1]) {
        folders.splice(i - 1, 2);
        i = i - 2;
      } else {
        folders.splice(i, 1)
        i = i - 1;
      }
    }
  }
  return folders;
}




console.log(simplify('/../')); // '/'
console.log(simplify('/home/')); // '/home'
console.log(simplify("/home//foo/")); // '/home/foo'
console.log(simplify("/a/./b/../../c/")); // '/c'
console.log(simplify("/.../"));
console.log(simplify("/a/.../"));
console.log(simplify("///TJbrd/owxdG//")); //"/TJbrd/owxdG"
console.log(simplify("/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///"));
