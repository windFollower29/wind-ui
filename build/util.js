
const fs = require('fs')
const path = require('path')

const getFiles = function (dirs, fileReg) {

  if (!Array.isArray(dirs)) {
    dirs = [ dirs ]
  }

  return dirs.reduce((arr, dir) => {

    let files = fs.readdirSync(dir)
    if (!files.length) return [] 
  
    files = files.reduce((arr, file) => {
      let res = []
      const filePath = path.join(dir, file)
  
      fileReg.test(file) && res.push(filePath)
  
      // if is directory
      if (fs.statSync(filePath).isDirectory()) {
        res = res.concat(getFiles(filePath, fileReg))
      }
  
      return arr.concat(res)
  
    }, [])
  
    return arr.concat(files)

  }, [])
}

module.exports = {
  getFiles
}