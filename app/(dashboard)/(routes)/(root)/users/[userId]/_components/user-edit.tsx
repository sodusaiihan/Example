"use client";

import { useMemo } from "react";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetUserByIdQuery } from "@/src/generated/graphql";
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
  const { data } = useGetUserByIdQuery({
    variables: { userId },
    skip: !userId,
  });

  const user = useMemo(() => {
    return data?.user || undefined;
  }, [data]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phonenumber: user?.phonenumber,
      address: user?.address,
      gender: user?.gender,
      birthday: user?.birthday,
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>
                  Add a new payment method to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <FormField
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <RadioGroup
                          defaultValue="user"
                          className="grid grid-cols-2 gap-4"
                          {...field}
                        >
                          <div>
                            <RadioGroupItem
                              value="admin"
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor="card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              Admin
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem
                              value="user"
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor="card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              User
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl className="relative">
                          <Input
                            autoComplete="off"
                            placeholder="name"
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            autoComplete="off"
                            placeholder="email 📧"
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
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={control}
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="phonenumber 📱"
                            {...field}
                            autoComplete="off"
                            className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                            pattern="[0-9]*"
                            {...register("phonenumber", {
                              required: true,
                              valueAsNumber: true,
                            })}
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
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="off"
                            placeholder="address 🏡"
                            className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <FormField
                      control={control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="MALE">Male</SelectItem>
                                <SelectItem value="FEMALE">Female</SelectItem>
                                <SelectItem value="OTHER">Other</SelectItem>
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
                          <FormLabel>Date of birth</FormLabel>
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
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continue</Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
