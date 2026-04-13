function fullName(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}


// export using commonjs
/* 
module.exports = fullName 
*/


// export using ESM
export default fullName