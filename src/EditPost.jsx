// export default function EditPost() {
//     function handleSubmit(e) {
//       // Prevent the browser from reloading the page
//       e.preventDefault();
  
//       // Read the form data
//       const form = e.target;
//       const formData = new FormData(form);
  
//       // You can pass formData as a fetch body directly:
//       fetch('/some-api', { method: form.method, body: formData });
  
//       // Or you can work with it as a plain object:
//       const formJson = Object.fromEntries(formData.entries());
//       console.log(formJson);
//     }
  
//     return (
//       <form method="post" onSubmit={handleSubmit}>
//         <label>
//         What is your question for Chloe, you mere Human? <input name="postTitle" defaultValue="Biking" />
//         </label>
//         <label>
//           pLEAse Elaborate so Chloe can better understand your pathetic question
//           <textarea
//             name="postContent"
//             defaultValue="I really enjoyed biking yesterday!"
//             rows={4}
//             cols={40}
//           />
//         </label>
//         <hr />
//         <button type="reset">Edit: Only human after all :_</button>
//         <button type="submit">Save post</button>
//       </form>
//     );
//   }
  