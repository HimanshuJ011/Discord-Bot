const { REST, Routes } = require ('discord.js');

const commands = [
  {
    name: 'about',
    description: 'About Himanshu Sir!',
  },
  {
    name: 'twitter',
    description: 'Twitter Handle for Joshi Sir!',
  },
  {
    name: 'linkedin',
    description: 'Linkedin Handle for Joshi Sir!',
  },
  {
    name: 'github',
    description: 'Github Handle for Joshi Sir!',
  },
];

const rest = new REST({ version: '10' }).setToken(
  process.env['TOKEN']
);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands("1117827333441732640"), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();