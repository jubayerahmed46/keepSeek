function generateHistoryContent(oldChats) {
  const historyStructure = [];

  for (let i = 0; i < oldChats.length; i++) {
    historyStructure.push(
      {
        role: "user",
        parts: [{ text: oldChats[i].user }],
      },
      {
        role: "model",
        parts: [{ text: oldChats[i].ai }],
      }
    );
  }

  return historyStructure;
}

export default generateHistoryContent;
// {
//     role: "model",
//     parts: [{ text: "Hey! are you weak now?" }],
//   },
// {
//     role: "user",
//     parts: [{ text: "Hello" }],
//   },

// {
//     user: 'hello',
//     ai: 'Hello there!  How can I help you today?\n',
//   },
