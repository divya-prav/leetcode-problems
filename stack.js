var buyChoco = function(prices, money) {
    if(prices === null || prices.length === 1) return money;
    let chocobelowCost = []
    let map = new Map();
    let balance = null;
    for(let i=0;i < prices.length;i++){
        if(prices[i] < money){
            chocobelowCost.push(prices[i])
        }
    }

    if(chocobelowCost.length <= 1) return money;
   
   console.log(chocobelowCost)
    for(let i =0;i<chocobelowCost.length;i++){
        for(let j=i+1;j<chocobelowCost.length;j++){
            if(money-(chocobelowCost[i]+chocobelowCost[j]) >= 0){
                map.set([chocobelowCost[i]+chocobelowCost[j]],money-(chocobelowCost[i]+chocobelowCost[j]))
            }
           
        }
    }
    console.log(map);
    for(let [key,value] of map){
        
        if(balance <= value) balance=value
    }
    return balance;
};

console.log(buyChoco([25,24],92))