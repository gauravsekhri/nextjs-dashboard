"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RxCrossCircled } from "react-icons/rx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const KeywordsDialog = ({
  isOpen,
  defaultValues,
  onSubmission,
  onClose,
}: {
  isOpen: boolean;
  defaultValues: Array<string>;
  onSubmission: (val: any) => void;
  onClose: () => void;
}) => {
  const options = [
    { value: "technology", label: "Technology" },
    { value: "react", label: "React Js" },
    { value: "javascript", label: "Javascript" },
    { value: "html", label: "html" },
    { value: "css", label: "css" },
    { value: "rust", label: "rust" },
    { value: "golang", label: "golang" },
    { value: "coding", label: "coding" },
    { value: "python", label: "python" },
    { value: "django", label: "django" },
    { value: "flask", label: "flask" },
    { value: "rest api", label: "rest api" },
    { value: "soap api", label: "soap api" },
    { value: "fast api", label: "fast api" },
    { value: "coder", label: "coder" },
    { value: "nextjs", label: "next js" },
    { value: "nextauth", label: "next auth" },
    { label: "Java programming", value: "Java programming" },
    { label: "ReactJS tutorial", value: "ReactJS tutorial" },
    { label: "Python coding examples", value: "Python coding examples" },
    { label: "Angular development tips", value: "Angular development tips" },
    { label: "JavaScript best practices", value: "JavaScript best practices" },
    { label: "HTML5 coding techniques", value: "HTML5 coding techniques" },
    { label: "CSS3 styling tricks", value: "CSS3 styling tricks" },
    {
      label: "Full-stack development guide",
      value: "Full-stack development guide",
    },
    {
      label: "Code optimization strategies",
      value: "Code optimization strategies",
    },
    {
      label: "Java vs Python performance",
      value: "Java vs Python performance",
    },
    { label: "React component lifecycle", value: "React component lifecycle" },
    { label: "Python data structures", value: "Python data structures" },
    { label: "Angular framework updates", value: "Angular framework updates" },
    { label: "JavaScript async await", value: "JavaScript async await" },
    { label: "HTML semantic markup", value: "HTML semantic markup" },
    { label: "CSS grid layout", value: "CSS grid layout" },
    { label: "Java design patterns", value: "Java design patterns" },
    { label: "React state management", value: "React state management" },
    { label: "Python web scraping", value: "Python web scraping" },
    { label: "Angular forms validation", value: "Angular forms validation" },
    { label: "JavaScript ES6 features", value: "JavaScript ES6 features" },
    {
      label: "HTML accessibility guidelines",
      value: "HTML accessibility guidelines",
    },
    { label: "CSS media queries", value: "CSS media queries" },
    { label: "Java Spring framework", value: "Java Spring framework" },
    { label: "React hooks tutorial", value: "React hooks tutorial" },
    { label: "Python machine learning", value: "Python machine learning" },
    { label: "Angular routing", value: "Angular routing" },
    { label: "JavaScript event handling", value: "JavaScript event handling" },
    { label: "HTML form best practices", value: "HTML form best practices" },
    {
      label: "CSS preprocessors (e.g., Sass)",
      value: "CSS preprocessors (e.g., Sass)",
    },
    { label: "Java multithreading", value: "Java multithreading" },
    { label: "React Native development", value: "React Native development" },
    { label: "Python Django framework", value: "Python Django framework" },
    { label: "Angular services", value: "Angular services" },
    {
      label: "JavaScript testing frameworks",
      value: "JavaScript testing frameworks",
    },
    { label: "HTML responsive design", value: "HTML responsive design" },
    { label: "CSS animation techniques", value: "CSS animation techniques" },
    { label: "Java Hibernate tutorial", value: "Java Hibernate tutorial" },
    { label: "React context API", value: "React context API" },
    {
      label: "Python Flask web development",
      value: "Python Flask web development",
    },
  ];

  const [searchText, setSearchText] = useState<string>("");

  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Select atleast one keyword.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    onSubmission(data?.items ?? []);
    onClose();
  }

  const openChange = () => {
    if (isOpen) {
      onClose();
      // setTimeout(() => {
      //   setUrl("");
      // }, 300);
    }
  };

  useEffect(() => {
    form.setValue("items", defaultValues);
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => openChange()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select keywords</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormDescription>
                            Select keywords for your post.
                          </FormDescription>
                        </div>
                        <div className="flex justify-end">
                          <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => form.reset()}
                          >
                            <RxCrossCircled />
                            <span>Unselect All</span>
                          </div>
                        </div>
                        <div className="py-4">
                          <Input
                            type="text"
                            placeholder="Search keywords"
                            value={searchText}
                            onChange={(e: any) => setSearchText(e.target.value)}
                          />
                        </div>
                        <ScrollArea className="h-[200px]">
                          <div className="grid grid-cols-3 gap-4 lg:grid-cols-2 mt-4">
                            {options
                              .filter((ele: any) =>
                                ele.label
                                  .toLowerCase()
                                  .includes(searchText.toLowerCase())
                              )
                              .map((item) => (
                                <FormField
                                  key={item.value}
                                  control={form.control}
                                  name="items"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.value}
                                        className="flex flex-row items-center space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              item.value
                                            )}
                                            onCheckedChange={(checked: any) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    item.value,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== item.value
                                                    )
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal capitalize cursor-pointer">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                          </div>
                        </ScrollArea>

                        <FormMessage className="pt-6" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="mt-4 w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default KeywordsDialog;
