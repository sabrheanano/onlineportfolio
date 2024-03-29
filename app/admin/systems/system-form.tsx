"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addItem, updateItem } from "@/app/data-access/works";

import { storage } from "@/db/firebase-config";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

export const SystemForm = ({ data, children }: any) => {
  const [image, setImage] = useState<any>();
  const [open, setOpen] = useState(false);
  const setImageAsURI = (file: any) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const dataURI = reader.result;
      setImage(dataURI);
      return dataURI;
    };

    reader.readAsDataURL(file);
  };

  const handleInsert = async (formData: any) => {
    const storageRef = ref(
      storage,
      `systems/${
        formData.system_title
      }-${new Date().getDay()}-${new Date().getFullYear()}`
    );

    formData.banner_url = image;
    console.log(formData);

    await uploadString(storageRef, formData.banner_url, "data_url", {
      contentType: "image/png",
    });

    const url = await getDownloadURL(storageRef).then((url) => {
      return url;
    });

    let data = {
      banner_url: url,
      system_title: formData.system_title,
      system_description: formData.system_description,
      link: formData.link,
    };

    await addItem(JSON.stringify(data), "systems");
    setOpen(false);
  };

  const handleUpdate = async (formData: any) => {
    console.log(formData, storage);

    const storageRef = ref(
      storage,
      `systems/${
        formData.system_title
      }-${new Date().getDay()}-${new Date().getFullYear()}`
    );

    if (formData.banner_url) {
      await uploadString(storageRef, formData.banner_url, "data_url", {
        contentType: "image/png",
      });

      const url = await getDownloadURL(storageRef).then((url) => {
        return url;
      });

      formData.banner_url = url;
    }

    await updateItem(formData, "systems", data.id);
    setOpen(false);
  };

  const handleSubmit = async (event: any) => {
    const form = new FormData(event.currentTarget);
    event.preventDefault();
    const formData: any = {};
    form.forEach((value, key) => (formData[key] = value));
    if (data) {
      if (!image) {
        delete formData.banner_url;
      }

      handleUpdate(formData);
    } else {
      handleInsert(formData);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>System Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Image
            height={540}
            width={540}
            quality={100}
            src={
              !image
                ? data?.banner_url
                  ? data?.banner_url
                  : "/placeholder.svg"
                : image
            }
            className="w-full h-64 mt-4 object-cover bg-muted"
            alt="banner-image"
          />
          <div className="grid gap-1.5 mt-4">
            <Label htmlFor="">System Banner</Label>
            <Input
              onChange={(event: any) => setImageAsURI(event.target.files[0])}
              name="banner_url"
              type="file"
            />
          </div>
          <div className="grid gap-1.5 mt-4">
            <Label htmlFor="">System Title</Label>
            <Input name="system_title" defaultValue={data?.system_title} />
          </div>
          <div className="grid gap-1.5 mt-4">
            <Label htmlFor="">System Description</Label>
            <Textarea
              name="system_description"
              defaultValue={data?.system_description}
            ></Textarea>
          </div>
          <div className="grid gap-1.5 mt-4">
            <Label htmlFor="">Link</Label>
            <Input name="link" defaultValue={data?.link} />
          </div>
          <DialogFooter className="my-4">
            <Button className="bg-main hover:bg-main/90">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
