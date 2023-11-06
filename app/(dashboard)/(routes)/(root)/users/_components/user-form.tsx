"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCreateUserMutation } from "@/src/generated/graphql";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  role: z.string(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phonenumber: z.string().min(8).max(13),
  address: z.string().min(5).max(100),
  birthday: z.date(),
  gender: z.string(),
});

function UserForm() {
  const [createUser, { error, loading }] = useCreateUserMutation();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createUser({
        variables: {
          ...values,
        },
      });
      toast.success("User created successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log("CREATE_USER", error);
    }
  };

  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = form;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Бүртгэх</Button>
      </SheetTrigger>
      <SheetContent className={"overflow-y-scroll max-h-screen scroll"}>
        <SheetHeader>
          <SheetTitle className="w-full flex items-center justify-center">
            Админ эсвэл хэрэглэгч үүсгэх
          </SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Роль</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Админ</SelectItem>
                        <SelectItem value="user">Хэрэглэгч</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Нэр</FormLabel>
                  <FormControl className="relative">
                    <Input
                      autoComplete="off"
                      placeholder="Та нэрээ оруулна уу 🤗"
                      {...field}
                      className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.name && (
                      <span className="text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цахим шуудан</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      autoComplete="off"
                      placeholder="Та цахим шуудангаа оруулна уу 📧"
                      className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.email && (
                      <span className="text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Утасны дугаар</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Та утасны дугаараа оруулна уу 📱"
                      autoComplete="off"
                      className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Хаяг</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="off"
                      placeholder="Та хаягаа оруулна уу 🏡"
                      className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Хүйс</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Та хүйсээ сонгоно уу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MALE">Эрэгтэй</SelectItem>
                        <SelectItem value="FEMALE">Эмэгтэй</SelectItem>
                        <SelectItem value="OTHER">Бусад</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="birthday"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Төрсөн огноо</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Огноо сонгох</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-between">
              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    type="button"
                    variant={"ghost"}
                    onClick={() => reset()}
                  >
                    Цуцлах
                  </Button>
                </SheetClose>
              </SheetFooter>
              <Button disabled={!isValid || isSubmitting} type="submit">
                Үүсгэх
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default UserForm;
