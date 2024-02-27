module.exports = {
    data: {
        name: `fav-color`
    },
    async execute(interation, client)
    {
        await interation.reply({
            content: `You said your favorite color is: ${interation.fields.getTextInputValue("favColorInput")}`
        });
    }
}