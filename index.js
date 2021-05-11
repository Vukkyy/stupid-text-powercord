const { Plugin } = require('powercord/entities');
let { messages } = require('powercord/webpack').i18n._proxyContext;

module.exports = class StupidText extends Plugin {
    startPlugin() {
        this.originalMessages = messages;
        messages.JUMP_TO_PRESENT = "Snap back to reality";
        messages.YOURE_VIEWING_OLDER_MESSAGES = "Stop looking at old messages, stalker!!";
        messages.EXPRESSION_PICKER_GIF = "Cringe Zone";
        messages.SEARCH_TENOR = "Search Tenor (very stupid)";
        messages.INVITE_BUTTON_INVALID = "Nonexisty";
        messages.INVITE_BUTTON_TITLE_INVITED = "Wanna come over and chat today?";
        messages.GUILD_VERIFIED = "VERY REAL";
        messages.VERIFIED_BOT_TOOLTIP = "REAL COMPUTER";
        messages.BOT_TAG_BOT = "DUMB";
        messages.BOT_TAG_SERVER = "SORVOR";
        messages.DM_TEXTAREA_PLACEHOLDER = "Cry to !!{channel}!!";
        messages.GUILD_PARTNERED = "Pretty Cool";
        messages.GUILD_VERIFIED_AND_PARTNERED = "Real & Cool";
        messages.CHANNEL_SLOWMODE_DESC_SHORT = "This channel is a snail.";
        messages.WELCOME_SCREEN_SKIP = "I'm a lurker";
        messages.CHANNELS_UNAVAILABLE_BODY = "Welcome to the void!!";
        messages.LEAVE_SERVER = "Ragequit";
        messages.CONFIRM_USER_BLOCK_TITLE = "You hate !!{name}!!?!";
        messages.NSFW_TITLE = "SUPER SCARY CHANNEL!!";
        messages.NSFW_ACCEPT = "( ͡° ͜ʖ ͡°)";
        messages.NSFW_DECLINE = "Hell no!";
        messages.LEAVE_SERVER_TITLE = "Bye bye, !!{name}!!!";
    }

    pluginWillUnload() {
        messages = this.originalMessages;
    }
}