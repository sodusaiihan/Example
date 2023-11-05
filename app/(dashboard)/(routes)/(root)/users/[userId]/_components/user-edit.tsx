"use client";

import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "@/src/generated/graphql";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface UserEditPageProps {
  userId: string;
}

const formSchema = z.object({
  role: z.string(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phonenumber: z.string().min(8).max(13),
  address: z.string().min(5).max(100),
  birthday: z.date(),
  gender: z.string(),
});

export function UserEditPage({ userId }: UserEditPageProps) {
  const router = useRouter();

  const { data } = useGetUserByIdQuery({
    variables: { userId },
    skip: !userId,
  });

  const [updateUser] = useUpdateUserMutation();

  const user = useMemo(() => {
    return data?.user || undefined;
  }, [data]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  useEffect(() => {
    reset({
      role: user?.role,
      name: user?.name,
      email: user?.email,
      phonenumber: user?.phonenumber,
      address: user?.address,
      gender: user?.gender,
    });
  }, [user, reset]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      updateUser({
        variables: {
          updateUserId: userId,
          ...values,
        },
      });
      toast.success("User updated successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log("UPDATE_USER_ID", error);
    }
  };

  return (
    <div className="max-w-8xl h-full flex gap-3 justify-between mt-4 px-8">
      <div className="flex flex-2 ">
        <Card>
          <CardHeader>
            <CardTitle>{user?.name || ""}</CardTitle>
            <CardDescription>{user?.email || ""}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <Image
              alt={user?.name || ""}
              src="/avatar/avatar2.svg"
              objectFit="contain"
              width={300}
              height={300}
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-3">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle>Засварлах</CardTitle>
                <CardDescription>Хэрэглэгч засварлах</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <FormField
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
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
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Нэр</FormLabel>
                        <FormControl className="relative">
                          <Input
                            autoComplete="off"
                            placeholder="Та нэрээ оруулна уу"
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
                          {errors.name && (
                            <span className="text-red-600">
                              {errors.name.message}
                            </span>
                          )}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <FormField
                    control={control}
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Утасны дугаар</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="off"
                            placeholder="Та утасны дугаараа оруулна уу 📱"
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
                </div>
                <FormField
                  control={control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="grid-flow-row">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Хүйс" />
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
                                <span>Өдөр сонгох</span>
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
              </CardContent>
              <CardFooter>
                <Button className="w-full">Хадгалах</Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
