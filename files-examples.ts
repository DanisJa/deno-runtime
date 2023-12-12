// Arrange
const decoder = new TextDecoder('utf-8');
const encoder = new TextEncoder();

// Reading a file
const data = await Deno.readFile('README.md');

console.log(decoder.decode(data));

// Writing to a file
const text = 'Write this to wherever, whatever.';
Deno.writeFile('README.md', encoder.encode(text));

// Create, rename and remove
await Deno.create('new_file.txt');
await Deno.rename('new_file.txt', 'new_file_renamed.txt');
await Deno.remove('new_file_renamed.txt');
