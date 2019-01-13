module Jekyll
 class HelloWorldTag < Liquid::Tag
  def render(context)
   puts post.tags
  end
 end
end
Liquid::Template.register_tag('helloworld', Jekyll::HelloWorldTag)
