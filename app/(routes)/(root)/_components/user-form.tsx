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

const Gender = z.enum(["MALE", "FEMALE", "OTHER"]);

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phonenumber: z.coerce.number().int().positive(),
  address: z.string().min(5).max(100),
  birthday: z.date(),
  gender: Gender,
  roleId: z.string().uuid(),
});

function UserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { reset, register, handleSubmit, control, formState } = form;
  const { isValid, isSubmitting } = formState;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent className={"overflow-y-scroll max-h-screen scroll"}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here.
          </SheetDescription>
        </SheetHeader>
        <div>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl className="relative">
                      <Input
                        placeholder="name"
                        {...field}
                        className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                      />
                    </FormControl>
                    <FormMessage>
                      {formState.errors.name && (
                        <span className="text-red-600">
                          {formState.errors.name.message}
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
                        placeholder="email 📧"
                        className="focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
                      />
                    </FormControl>
                    <FormMessage>
                      {formState.errors.name && (
                        <span className="text-red-600">
                          {formState.errors.name.message}
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="phonenumber 📱"
                        {...field}
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
                        placeholder="address 🏡"
                        {...field}
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
                      onClick={() => form.reset()}
                    >
                      Cancel
                    </Button>
                  </SheetClose>
                </SheetFooter>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default UserForm;
