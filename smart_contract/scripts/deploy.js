const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Zoro", "Luffy", "Sanji", "God Ussop"], // Hero list
        ["https://i.imgur.com/wYC5liz.png", // Hero images
            "https://i.imgur.com/nffNI8t.png",
            "https://i.imgur.com/JcyAuME.jpeg",
            "https://i.imgur.com/V8PTGUZ.png"],
        [600, 1200, 300,2500], // Hero Hp
        [150, 80, 190,120], // Hero Attack
        "God Enel", // Boss name
        "https://i.imgur.com/jNoKnWa.jpg", // Boss image
        10000, // Boss Hp
        69 // Boss Attack
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();