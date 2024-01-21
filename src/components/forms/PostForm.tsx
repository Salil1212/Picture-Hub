import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import FileUploader from "../shared/FileUploader";
import { PostValidation } from "@/lib/validation";
import { Models } from "appwrite";
import { useCreatePost } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { useToast } from "../ui/use-toast";
type PostFormProps = {
  post?: Models.Document;
  action: "Create" | "Update";
};
const PostForm = ({ post }: PostFormProps) => {
  // Define your form.
  const { mutateAsync: createPost, isPending: isLoadingCreate } =
    useCreatePost();
  const { user } = useUserContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  // 1.Define your form.
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ? post?.location : "",
      tags: post ? post.tags.join(",") : "",
    },
  });

  //Define a submit handler.
  async function onSubmit(values: z.infer<typeof PostValidation>) {
    const newPost = await createPost({
      ...values,
      userId: user.id,
    });
    if (!newPost) {
      toast({
        title: `post failed.Please try again.`,
      });
    }
    navigate("/");
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-5xl gap-9"
        >
          <FormField
            control={form.control}
            name="caption"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Caption</FormLabel>
                <FormControl>
                  <Textarea
                    className="shad-textarea custom-scrollbar"
                    placeholder="caption"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Add Photos</FormLabel>
                <FormControl>
                  <FileUploader
                    fieldChange={field.onChange}
                    mediaUrl={post?.imageUrl}
                  />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Add Location</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  Add Tags(separated by comma ", ")
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    placeholder="Typescript/React"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end gap-4">
            <Button type="button" className="shad-button_dark_4">
              Cancel
            </Button>
            <Button
              type="submit"
              className="shad-button_primary whitespace-nowrap"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import FileUploader from "../shared/FileUploader";
// import { PostValidation } from "@/lib/validation";
// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be atleast 2 characters.",
//   }),
// });
// const PostForm = ({ post }) => {
//   // Define your form.

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   //Define a submit handler.
//   function onSubmit(values: z.infer<typeof PostValidation>) {
//     // Do something with the form values.
//     // This will be type-safe and validated.
//     console.log(values);
//   }
//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="flex flex-col w-full max-w-5xl gap-9"
//       >
//         <FormField
//           control={form.control}
//           name="caption"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">Caption</FormLabel>
//               <FormControl>
//                 <Textarea
//                   className="shad-textarea custom-scrollbar"
//                   placeholder="caption"
//                   {...field}
//                 />
//               </FormControl>

//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="file"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">Add Photos</FormLabel>
//               <FormControl>
//                 <FileUploader
//                   fieldChange={field.onChange}
//                   mediaUrl={post?.imageUrl}
//                 />
//               </FormControl>

//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="location"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">Add Location</FormLabel>
//               <FormControl>
//                 <Input type="text" className="shad-input" {...field} />
//               </FormControl>

//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="tags"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="shad-form_label">
//                 Add Tags(separated by comma ", ")
//               </FormLabel>
//               <FormControl>
//                 <Input
//                   type="text"
//                   className="shad-input"
//                   placeholder="Typescript/React"
//                   {...field}
//                 />
//               </FormControl>

//               <FormMessage className="shad-form_message" />
//             </FormItem>
//           )}
//         />
//         <div>
//           <Button type="button" className="shad-button_dark_4">
//             Cancel
//           </Button>
//           <Button
//             type="submit"
//             className="shad-button_primary whitespace-nowrap"
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default PostForm;
// // 3:09:18
