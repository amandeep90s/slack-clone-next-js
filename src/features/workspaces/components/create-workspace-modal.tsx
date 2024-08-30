'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { useCreateWorkspace } from '../api/use-create-workspace';
import { useCreateWorkspaceModal } from '../store/use-create-workspace-modal';

const CreateWorkspaceModal = () => {
  const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();
  const [name, setName] = useState('');

  const { mutate, isPending } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    setName('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(
      { name },
      {
        onSuccess(workspaceId) {
          toast.success('Workspace created');
          handleClose();
          router.push(`/workspace/${workspaceId}`);
        }
      }
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          <Input
            value={name}
            onChange={({ target }) => setName(target.value)}
            disabled={isPending}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPending}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceModal;
