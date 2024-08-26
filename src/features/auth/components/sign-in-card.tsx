import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SignInFlow } from '../types';

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

const SignInCard = ({ setState }: SignInCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>Use your email or other service to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email"
            disabled={false}
            required
          />
          <Input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Password"
            disabled={false}
            required
          />
          <Button
            type="submit"
            className="w-full"
            size={'lg'}
            disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            type="button"
            className="w-full relative"
            variant={'outline'}
            size={'lg'}
            disabled={false}
            onClick={() => {}}>
            <FcGoogle className="size-5 absolute top-3 left-2.5" />
            Continue with Google
          </Button>
          <Button
            type="button"
            className="w-full relative"
            variant={'outline'}
            size={'lg'}
            disabled={false}
            onClick={() => {}}>
            <FaGithub className="size-5 absolute top-3 left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Button
            type="button"
            variant={'link'}
            onClick={() => setState('signUp')}
            className="text-xs text-sky-700 hover:underline cursor-pointer p-0">
            Sign up
          </Button>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
