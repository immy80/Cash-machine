let orderCount = 0;

const takeOrder = (topping) => {
    console.log(`pizza with ${topping}`);
    orderCount++;
}

takeOrder("mushrooms");