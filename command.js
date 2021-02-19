const { text } = require("express");

module.exports = {
    Command: class Command {
        constructor({
            name,
            description,
            execute,
            aliases = [],
            args = false,
            usage = '',
            cooldown = 3,
        }) {
            this.name = name;
            this.description = description;
            this.execute = execute;
            this.aliases = aliases;
            this.args = args;
            this.usage = usage;
            this.cooldown = cooldown;
        }
    }
}