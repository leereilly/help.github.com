---
layout: default
title: Working with submodules
description: A quickprimer for submodules
categories: advanced
---

[Git Submodules](http://web.archive.org/web/20090416025751/http://www.kernel.org/pub/software/scm/git/docs/git-submodule.html)
are actually pretty great. Here’s a simple way to manage submodule development
from within an open source project.

Say there’s an Awesome Framework, and you want to write an open source plugin for it.

First create the plugin.

<pre class="terminal">
$ git init my-fantastic-plugin
</pre>

Next clone the framework.

<pre class="terminal">
$ git clone defunkt/my-awesome-framework
$ cd my-awesome-framework
</pre>

Now add your plugin as a submodule to the framework.

<pre class="terminal">
$ git submodule add git://github.com/defunkt/my-fantastic-plugin.git plugins/my-fantastic-plugin
</pre>

Next cd into the plugin and add your private URL as a remote.

<pre class="terminal">
$ cd plugins/my-fantastic-plugin
$ git remote add push git@github.com:defunkt/my-fantastic-plugin.git
</pre>

And that’s it. Make changes from within `my-awesome-framework/plugins/my-fantastic-plugin`
and, when you’re ready, just `git push push master`.

Best of all: people cloning your `my-awesome-framework` fork will have no
problem pulling down your `my-fantastic-plugin` submodule, as you’ve registered
the public clone URL for the submodule. The commands

<pre class="terminal">
$ git submodule init
$ git submodule update
</pre>

Will pull the submodules into the current repository.

This is how I develop [textmate.el](http://web.archive.org/web/20090416025751/http://github.com/defunkt/textmate.el)
from within my [Emacs config](http://web.archive.org/web/20090416025751/http://github.com/defunkt/emacs/tree/master/vendor)
while keeping the submodule URL public.

![](http://img.skitch.com/20081126-qrn7p5xwmsi65d4sxdt83bc9u7.png)

Check out [my-awesome-framework](http://web.archive.org/web/20090416025751/http://github.com/defunkt/my-awesome-framework)
to see this Guide’s example in action.