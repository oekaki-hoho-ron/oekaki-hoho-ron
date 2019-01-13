module Jekyll
  class Test < Liquid::Tag
    def test(context)
      "テスト"
    end
  end
end

Liquid::Template.register_tag('test', Jekyll::Test)
