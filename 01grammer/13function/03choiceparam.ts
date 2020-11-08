function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
 
//let result1 = buildName("Bob");                  // 错误，缺少参数
//let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");         // 正确
console.log(result3);//Bob Adams