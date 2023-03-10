function solution(nums) {
    const takePokemon = nums.length / 2;
    const typePokemon = [...new Set(nums)].length;
    
    if(typePokemon >= takePokemon) return takePokemon;
    if(typePokemon < takePokemon) return typePokemon;
}
