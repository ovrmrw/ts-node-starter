import * as lodash from 'lodash'


////////////////////////////////////////////////////////
/* async/await */

console.log(1);

(async () => {
  const start = lodash.now()
  console.log(2)

  await new Promise(resolve => {
    setTimeout(() => {
      console.log(4)
      resolve()
    }, 2000)
  })

  console.log(5)
  console.log(lodash.now() - start + 'ms passed.')
})()

console.log(3)


////////////////////////////////////////////////////////
/* strictNullChecks, noUnusedLocals */

// const num: number = null; // Invalid, due to "strictNullChecks".
const numNullable: number | null = null // Valid.

async function asyncFunc() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log(numNullable)
      resolve()
    }, 2000)
  })
}

asyncFunc() // comment-out this line will cause of TypeError due to "noUnusedLocals".