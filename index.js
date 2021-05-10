const { Plugin } = require('powercord/entities');
const { messages } = require('powercord/webpack').i18n._proxyContext;

module.exports = class StupidText extends Plugin {
    startPlugin() {
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
    }

    pluginWillUnload() {
        messages.JUMP_TO_PRESENT = "Jump To Present";
        messages.YOURE_VIEWING_OLDER_MESSAGES = "You're viewing older messages";
        messages.EXPRESSION_PICKER_GIF = "GIFs";
        messages.SEARCH_TENOR = "Search Tenor";
        messages.INVITE_BUTTON_INVALID = "Invalid Invite";
        messages.INVITE_BUTTON_TITLE_INVITED = "You've been invited to join a server";
        messages.GUILD_VERIFIED = "Verified";
        messages.VERIFIED_BOT_TOOLTIP = "Verified Bot";
        messages.BOT_TAG_BOT = "BOT";
        messages.BOT_TAG_SERVER = "SERVER";
        messages.DM_TEXTAREA_PLACEHOLDER = "Message !!{channel}!!";
        messages.GUILD_PARTNERED = "Discord Partner";
        messages.GUILD_VERIFIED_AND_PARTNERED = "Verified & Partnered";
        messages.CHANNEL_SLOWMODE_DESC_SHORT = "Slowmode is enabled.";
        messages.WELCOME_SCREEN_SKIP = "I'll just look around for now";
        messages.CHANNELS_UNAVAILABLE_BODY = "You find yourself in a strange place. You don't have access to any text channels, or there are none in this server.";
        messages.LEAVE_SERVER = "Leave Server";
        messages.CONFIRM_USER_BLOCK_TITLE = "Block !!{name}!!?";
        messages.NSFW_TITLE = "NSFW Channel";
        messages.NSFW_ACCEPT = "Continue";
        messages.NSFW_DECLINE = "Nope";
    }
}